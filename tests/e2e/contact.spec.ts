import { test, expect } from '@playwright/test';

test.describe('Contact Flow', () => {
  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('/contact');

    await page.getByPlaceholder('Enter your name').fill('Tester');
    await page.getByPlaceholder('Enter your email').fill('tester@example.com');
    await page.getByPlaceholder('Tell us about your project...').fill('I want to build a high-end D2C platform with a custom blueprint.');

    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Message sent successfully')).toBeVisible({ timeout: 10000 });
  });
});
