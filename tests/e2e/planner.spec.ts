import { test, expect } from '@playwright/test';

test.describe('Planner Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/planner');
  });

  test('should allow selecting features and seeing the estimate', async ({ page }) => {
    // Check initial state
    const totalDisplay = page.getByTestId('total-price');
    await expect(totalDisplay).toContainText('$0');

    // Select Email/Password Auth
    // Use a more specific locator for the card title to ensure we click the header/card
    await page.getByRole('heading', { name: 'Email/Password Auth' }).click();
    
    // Check if total updated
    await expect(totalDisplay).toContainText('$500');

    // Select Social Login
    await page.getByRole('heading', { name: 'Social Login (OAuth)' }).click();
    await expect(totalDisplay).toContainText('$1,300'); // 500 + 800
  });

  test('should submit the form successfully', async ({ page }) => {
    // Select a feature
    await page.getByText('Email/Password Auth').click();

    // Fill the form
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Email Address').fill('test@example.com');

    // Submit
    await page.getByRole('button', { name: 'Request Proposal' }).click();

    // Wait for success message
    await expect(page.getByText('Blueprint Received')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('Plan received!')).toBeVisible();
  });

  test('mobile sticky footer should be visible and work', async ({ page, isMobile }) => {
    if (!isMobile) return;

    // Select a feature
    await page.getByText('Email/Password Auth').click();

    // Check sticky footer
    const footer = page.locator('div.fixed.bottom-0');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('$500')).toBeVisible();

    // Click "Review & Submit"
    await footer.getByRole('button', { name: 'Review & Submit' }).click();

    // Check if scrolled to form (we can check if name input is in viewport)
    await expect(page.getByPlaceholder('Your Name')).toBeInViewport();
  });
});
