import { expect, test } from '@playwright/test';

test.describe('Landing Page - Passed Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the landing page
    await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  });

  test('should load the landing page', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:5173/');
  });


  test('should have a register button', async ({ page }) => {
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });


  test('should display the website logo', async ({ page }) => {
    await expect(page.locator('img[alt="Logo"]')).toBeVisible();
  });


  test('should mask password input', async ({ page }) => {
    await page.fill('input[placeholder="Password"]', 'SecurePass123');
    await expect(page.locator('input[placeholder="Password"]')).toHaveAttribute('type', 'password');
  });
});
