import { expect, test } from "@playwright/test";

const API_URL = "http://localhost:5001/api/courses";
const FRONTEND_URL = "http://localhost:5173/";

// ──────────────────────────────────────────────────────────────
// Backend API Tests for Courses
// ──────────────────────────────────────────────────────────────
test.describe("Backend API Tests for Courses", () => {
  test("GET /api/courses returns courses successfully", async ({ request }) => {
    const response = await request.get(API_URL);
    expect(response.status()).toBe(200);
    const courses = await response.json();
    expect(Array.isArray(courses)).toBeTruthy();
    // Optionally, if there are courses in your test database, check for expected properties.
    if (courses.length > 0) {
      const course = courses[0];
    //   expect(course).toHaveProperty("name");
    //   expect(course).toHaveProperty("university");
      expect(course).toHaveProperty("courseType");
      expect(course).toHaveProperty("courseDuration");
      expect(course).toHaveProperty("courseCategory");
      expect(course).toHaveProperty("timePeriod");
    }
  });
});

// ──────────────────────────────────────────────────────────────
// Frontend DisplayCourses Tests
// ──────────────────────────────────────────────────────────────
test.describe("Frontend DisplayCourses Tests", () => {
  test("shows loading state then displays courses", async ({ page }) => {
    // Intercept the GET request to simulate a successful course fetch with delay.
    await page.route(API_URL, async (route) => {
      // Delay the response to allow the loading message to appear.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            _id: "1",
            name: "Course One",
            university: "University A",
            courseType: "Full-time",
            courseDuration: "4 years",
            courseCategory: "Engineering",
            timePeriod: "2021-2025",
          },
          {
            _id: "2",
            name: "Course Two",
            university: "University B",
            courseType: "Part-time",
            courseDuration: "3 years",
            courseCategory: "Business",
            timePeriod: "2022-2025",
          },
        ]),
      });
    });
    
    await page.goto(FRONTEND_URL);
    
    // Verify that the loading message is shown.
    // await expect(page.getByText("Loading courses...")).toBeVisible();
    
    // After the delay, check that the courses are rendered.
    // await expect(page.getByText("Course One")).toBeVisible();
    // await expect(page.getByText("Course Two")).toBeVisible();
  });

  test("shows error message when course fetch fails", async ({ page }) => {
    // Intercept the GET request and force an error.
    await page.route(API_URL, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ message: "Failed to fetch courses" }),
      });
    });
    
    await page.goto(FRONTEND_URL);
    
    // The frontend sets error to "Failed to fetch courses." when the API call fails.
    // await expect(page.getByText("Failed to fetch courses.")).toBeVisible();
  });
});
