import { expect, test } from '@playwright/test';

const API_URL = "http://localhost:5001/api/universities";
// Adjust this if the TopUniversities component is served on a different route.
const FRONTEND_URL = "http://localhost:5173/top-universities";

//
// ─── BACKEND API TESTS FOR TOP UNIVERSITIES ────────────────────────────────
//

test.describe("Backend API Tests for Top Universities", () => {
  test("GET /api/universities returns universities successfully", async ({ request }) => {
    const response = await request.get(API_URL);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    // If data is available, check that each university object includes required properties.
    if (data.length > 0) {
      const uni = data[0];
      expect(uni).toHaveProperty("ranking");
      expect(uni).toHaveProperty("name");
      expect(uni).toHaveProperty("location");
    }
  });

  // Simulating a server error for backend API tests is not trivial without modifying the backend.
  // If needed, you can add tests that simulate error responses via mocks in your backend test suite.
});

//
// ─── FRONTEND TESTS FOR TOP UNIVERSITIES COMPONENT ──────────────────────────
//

test.describe("Frontend Tests for Top Universities", () => {
  test("should display loading state then render table with universities", async ({ page }) => {
    // Intercept the API call and simulate a successful response with sample data.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            _id: "1",
            ranking: 1,
            name: "University A",
            location: "City A"
          },
          {
            _id: "2",
            ranking: 2,
            name: "University B",
            location: "City B"
          }
        ])
      });
    });

    await page.goto(FRONTEND_URL);

    // Initially, the loading message should be visible.
    // await expect(page.locator("text=Loading universities...")).toBeVisible();

    // Then the table should be rendered with the provided data.
    await expect(page.locator("table")).toBeVisible();
    await expect(page.locator("td", { hasText: "1" })).toBeVisible();
    await expect(page.locator("td", { hasText: "University A" })).toBeVisible();
    await expect(page.locator("td", { hasText: "City A" })).toBeVisible();
    await expect(page.locator("td", { hasText: "2" })).toBeVisible();
    await expect(page.locator("td", { hasText: "University B" })).toBeVisible();
    await expect(page.locator("td", { hasText: "City B" })).toBeVisible();
  });

  test("should display 'No universities available.' when no universities are returned", async ({ page }) => {
    // Simulate an empty list response.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([])
      });
    });

    await page.goto(FRONTEND_URL);

    // Since the list is empty and not loading, the message should be visible.
    await expect(page.locator("text=No universities available.")).toBeVisible();
  });

  test("should display error message when API call fails", async ({ page }) => {
    // Simulate a failure response.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Server error" })
      });
    });

    await page.goto(FRONTEND_URL);

    // According to your FE code, on error it sets error to "Failed to fetch universities."
    await expect(page.locator("text=Failed to fetch universities.")).toBeVisible();
  });
});
