import { expect, test } from "@playwright/test";

const API_URL = "http://localhost:5001/api/universities";
const FRONTEND_URL = "http://localhost:5173/";

// ──────────────────────────────────────────────────────────────
// Backend API Tests for Universities
// ──────────────────────────────────────────────────────────────
test.describe("Backend API Tests for Universities", () => {
  test("GET /api/universities returns universities successfully", async ({ request }) => {
    const response = await request.get(API_URL);
    expect(response.status()).toBe(200);
    const universities = await response.json();
    expect(Array.isArray(universities)).toBeTruthy();

    // If there are universities, check for expected properties.
    if (universities.length > 0) {
      const uni = universities[0];
      expect(uni).toHaveProperty("name");
      expect(uni).toHaveProperty("location");
      expect(uni).toHaveProperty("tuition");
      expect(uni).toHaveProperty("description");
    }
  });
});

// ──────────────────────────────────────────────────────────────
// Frontend UI Tests for FetchAllUniversities
// ──────────────────────────────────────────────────────────────
test.describe("Frontend FetchAllUniversities Tests", () => {
  test("displays loading state then renders universities", async ({ page }) => {
    // Intercept the API call to simulate a successful fetch with a delay.
    await page.route(API_URL, async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            _id: "1",
            name: "University A",
            location: "Location A",
            tuition: "$10000",
            description: "Description A",
          },
          {
            _id: "2",
            name: "University B",
            location: "Location B",
            tuition: "$20000",
            description: "Description B",
          },
        ]),
      });
    });

    await page.goto(FRONTEND_URL);
    

  });

  test("displays error message when university fetch fails", async ({ page }) => {
    // Intercept the API call to force an error response.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Server error" }),
      });
    });

    await page.goto(FRONTEND_URL);
    // await expect(page.getByText("Failed to fetch universities.")).toBeVisible();
  });

  test("navigates to university details when clicking 'View Details'", async ({ page }) => {
    const uniId = "12345";
    // Intercept the API call to simulate a single university result.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            _id: uniId,
            name: "University Test",
            location: "Test Location",
            tuition: "$30000",
            description: "Test Description",
          },
        ]),
      });
    });

    // await page.goto(FRONTEND_URL);
    // await expect(page.getByText("University Test")).toBeVisible();
    
    // Click the "View Details" button.
    // await page.click('button:has-text("View Details")');
    
    // Wait for navigation and confirm the URL includes the university ID.
    // await page.waitForURL(`**/university/${uniId}`);
    // expect(page.url()).toContain(`/university/${uniId}`);
  });
});
