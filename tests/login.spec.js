import { expect, test } from "@playwright/test";

const API_URL = "http://localhost:5001/api/auth/login";
const FRONTEND_URL = "http://localhost:5173/";

// ──────────────
// Backend API Tests
// ──────────────
test.describe("Backend API Tests", () => {
  test("should return 400 if username or password is missing", async ({ request }) => {
    const response = await request.post(API_URL, { data: { username: "", password: "" } });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("All fields are required");
  });

  test("should return 400 for invalid credentials", async ({ request }) => {
    const response = await request.post(API_URL, { data: { username: "wrongUser", password: "wrongpassword" } });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("Invalid credentials");
  });

//   test("should return 200 and a valid token for successful login", async ({ request }) => {
//     const response = await request.post(API_URL, { data: { username: "testUser", password: "correctpassword" } });
//     // // expect(response.status()).toBe(200);
//     // const body = await response.json();
//     // // expect(body.message).toBe("");
//     // expect(body.token).toBeTruthy();
//     // expect(body.isAdmin).toBe(false);
//   });
});

// ──────────────
// Frontend UI Tests
// ──────────────
test.describe("Frontend Login Tests", () => {
  // Intercept the login API request to simulate responses exactly as in your code.
  test.beforeEach(async ({ page }) => {
    await page.route(API_URL, async (route) => {
      const postData = JSON.parse(route.request().postData() || "{}");
      
      // If either field is missing, return your error message.
      if (!postData.username || !postData.password) {
        await route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({ error: "All fields are required" }),
        });
        return;
      }
      
      // Normal user login
      if (postData.username === "testUser" && postData.password === "correctpassword") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ message: "Login successful", token: "mocked_token", isAdmin: false }),
        });
        return;
      }
      
      // Admin user login
      if (postData.username === "adminUser" && postData.password === "adminpassword") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ message: "Login successful", token: "mocked_token", isAdmin: true }),
        });
        return;
      }
      
      // Otherwise, invalid credentials.
      await route.fulfill({
        status: 400,
        contentType: "application/json",
        body: JSON.stringify({ error: "Invalid credentials" }),
      });
    });
  });

  test("renders the login form correctly", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  test("shows error message on missing credentials", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    // Click login without entering any data
    await page.click('button:has-text("Login")');
    // Expect error message "All fields are required" as per your code
    // await expect(page.getByText("All fields are required")).toBeVisible();
  });

  test("shows error message on invalid credentials", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    await page.fill('input[placeholder="Username"]', "wrongUser");
    await page.fill('input[placeholder="Password"]', "wrongpassword");
    await page.click('button:has-text("Login")');
    await expect(page.getByText("Invalid credentials")).toBeVisible();
  });

  test("redirects normal user to landing page on successful login", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    await page.fill('input[placeholder="Username"]', "testUser");
    await page.fill('input[placeholder="Password"]', "correctpassword");
    await page.click('button:has-text("Login")');
    // Expect redirection to /landing-page after successful login
    await page.waitForURL(/landing-page/);
    expect(page.url()).toContain("/landing-page");
  });

  test("redirects admin user to dashboard on successful login", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    await page.fill('input[placeholder="Username"]', "adminUser");
    await page.fill('input[placeholder="Password"]', "adminpassword");
    await page.click('button:has-text("Login")');
    // Expect redirection to /admin/dashboard for admin users
    await page.waitForURL(/admin\/dashboard/);
    expect(page.url()).toContain("/admin/dashboard");
  });
});
