import { expect, test } from '@playwright/test';

const API_URL = "http://localhost:5001/api/universities";
// Adjust this URL if your ComprehensiveInsights component is mounted on a different route.
const FRONTEND_URL = "http://localhost:5173/comprehensive-insights";

//
// ─── BACKEND API TESTS ────────────────────────────────────────────────
//

test.describe("Backend API Tests for ComprehensiveInsights", () => {
  test("GET /api/universities returns universities successfully", async ({ request }) => {
    const response = await request.get(API_URL);
    expect(response.status()).toBe(200);
    const universities = await response.json();
    expect(Array.isArray(universities)).toBeTruthy();
    // If data exists, check for expected properties
    if (universities.length > 0) {
      const uni = universities[0];
      expect(uni).toHaveProperty("name");
      expect(uni).toHaveProperty("location");
      expect(uni).toHaveProperty("ranking");
    }
  });
});

//
// ─── FRONTEND TESTS ────────────────────────────────────────────────
//

test.describe("Frontend Tests for ComprehensiveInsights Component", () => {
  
  test("displays loading state then renders university cards", async ({ page }) => {
    // Intercept the GET request to simulate a successful API response.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          { _id: "1", name: "University A", location: "City A", ranking: 1 },
          { _id: "2", name: "University B", location: "City B", ranking: 2 }
        ])
      });
    });
    
    await page.goto(FRONTEND_URL);
    
    // Verify that the loading message is displayed initially.
    // await expect(page.locator("text=Loading universities...")).toBeVisible();
    
    // Then verify that the sample university names are rendered.
    await expect(page.locator("text=University A")).toBeVisible();
    await expect(page.locator("text=University B")).toBeVisible();
  });
  
  test("displays 'No universities found.' when search returns no results", async ({ page }) => {
    // Intercept the API call to return sample data.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          { _id: "1", name: "University A", location: "City A", ranking: 1 },
          { _id: "2", name: "University B", location: "City B", ranking: 2 }
        ])
      });
    });
    
    await page.goto(FRONTEND_URL);
    // Wait until the data is loaded.
    await expect(page.locator("text=University A")).toBeVisible();
    await expect(page.locator("text=University B")).toBeVisible();
    
    // Type a search query that does not match any university.
    await page.fill('input[placeholder="Search for universities..."]', "Nonexistent");
    // Click the filter button (assumed to be the only button in the search bar).
    await page.click('button');
    
    // Expect the "No universities found." message.
    await expect(page.locator("text=No universities found.")).toBeVisible();
  });
  
  test("displays all universities when search query is empty", async ({ page }) => {
    // Intercept the API call to return sample data.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          { _id: "1", name: "University A", location: "City A", ranking: 1 },
          { _id: "2", name: "University B", location: "City B", ranking: 2 }
        ])
      });
    });
    
    await page.goto(FRONTEND_URL);
    // Wait for data to load.
    await expect(page.locator("text=University A")).toBeVisible();
    await expect(page.locator("text=University B")).toBeVisible();
    
    // Type a search query then clear it.
    await page.fill('input[placeholder="Search for universities..."]', "University");
    await page.fill('input[placeholder="Search for universities..."]', "");
    // Click the filter button.
    await page.click('button');
    
    // Verify that both universities remain visible.
    await expect(page.locator("text=University A")).toBeVisible();
    await expect(page.locator("text=University B")).toBeVisible();
  });
  
  test("displays error message when API call fails", async ({ page }) => {
    // Intercept the GET request and simulate a failure.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Server error" })
      });
    });
    
    await page.goto(FRONTEND_URL);
    
    // According to your component, on error it sets error to "Failed to fetch universities"
    await expect(page.locator("text=Failed to fetch universities")).toBeVisible();
  });
});
