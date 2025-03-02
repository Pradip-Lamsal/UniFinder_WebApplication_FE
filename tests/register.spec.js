import { expect, test } from "@playwright/test";

const API_URL = "http://localhost:5001/api/auth/register";
const FRONTEND_URL = "http://localhost:5173/register";

//
// ─── BACKEND API TESTS FOR REGISTRATION ─────────────────────────────────────────
//

test.describe("Backend API Tests for Registration", () => {
  test("should return 400 if any required field is missing", async ({ request }) => {
    // Sending empty strings for required fields triggers the error in your backend.
    const response = await request.post(API_URL, {
      data: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      }
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("All fields are required");
  });

  test("should return 400 if username already exists", async ({ request }) => {
    // Assume that 'existingUser' is already registered.
    const response = await request.post(API_URL, {
      data: {
        firstName: "Test",
        lastName: "User",
        username: "existingUser",
        email: "test@example.com",
        password: "password123"
      }
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("Username already exists");
  });

  test("should register user successfully with valid data", async ({ request }) => {
    // Use a unique username to avoid conflicts in the test database.
    const uniqueUsername = `user_${Date.now()}`;
    const response = await request.post(API_URL, {
      data: {
        firstName: "John",
        lastName: "Doe",
        username: uniqueUsername,
        email: `${uniqueUsername}@example.com`,
        password: "password123"
      }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.message).toBe("User registered successfully");
  });
});

//
// ─── FRONTEND UI TESTS FOR REGISTRATION ──────────────────────────────────────────
//

test.describe("Frontend Registration Tests", () => {
  // Intercept the POST request to simulate backend responses exactly as implemented.
  test.beforeEach(async ({ page }) => {
    await page.route(API_URL, async (route) => {
      const postData = JSON.parse(route.request().postData() || "{}");

      // If any required field is missing, return the error defined in your code.
      if (
        !postData.firstName ||
        !postData.lastName ||
        !postData.username ||
        !postData.email ||
        !postData.password
      ) {
        await route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({ error: "All fields are required" })
        });
        return;
      }
      // Simulate "username already exists" error.
      if (postData.username === "existingUser") {
        await route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({ error: "Username already exists" })
        });
        return;
      }
      // Otherwise, simulate a successful registration.
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ message: "User registered successfully" })
      });
    });
  });

  test("renders the registration form correctly", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    await expect(page.getByPlaceholder("First Name")).toBeVisible();
    await expect(page.getByPlaceholder("Last Name")).toBeVisible();
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Email")).toBeVisible();
    // await expect(page.getByPlaceholder("Password")).toBeVisible();
    // await expect(page.getByPlaceholder("Confirm Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Register" })).toBeVisible();
  });

  test("shows error message when required fields are missing", async ({ page }) => {
    await page.goto(FRONTEND_URL);

    // Fill in only some of the fields and leave out firstName.
    await page.fill('input[name="lastName"]', "Doe");
    await page.fill('input[name="username"]', "newUser");
    await page.fill('input[name="email"]', "newuser@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.fill('input[name="confirmPassword"]', "password123");

    // Remove the built-in HTML5 validation for firstName to allow submission.
    await page.evaluate(() => {
      document.querySelector('input[name="firstName"]').removeAttribute("required");
    });

    await page.click('button:has-text("Register")');
    await expect(page.getByText("All fields are required")).toBeVisible();
  });

  test("shows error message when username already exists", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    // Fill in the form with a username that triggers the existing user error.
    await page.fill('input[name="firstName"]', "Test");
    await page.fill('input[name="lastName"]', "User");
    await page.fill('input[name="username"]', "existingUser");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.fill('input[name="confirmPassword"]', "password123");

    await page.click('button:has-text("Register")');
    await expect(page.getByText("Username already exists")).toBeVisible();
  });

  test("shows success message on successful registration", async ({ page }) => {
    await page.goto(FRONTEND_URL);
    // Use a unique username for a successful registration.
    const uniqueUsername = `user_${Date.now()}`;
    await page.fill('input[name="firstName"]', "John");
    await page.fill('input[name="lastName"]', "Doe");
    await page.fill('input[name="username"]', uniqueUsername);
    await page.fill('input[name="email"]', `${uniqueUsername}@example.com`);
    await page.fill('input[name="password"]', "password123");
    await page.fill('input[name="confirmPassword"]', "password123");

    await page.click('button:has-text("Register")');
    await expect(page.getByText("User registered successfully")).toBeVisible();
  });
});
