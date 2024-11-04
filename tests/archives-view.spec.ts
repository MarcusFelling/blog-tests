import { test, expect } from '@playwright/test';

test('should allow me to view archives', async ({ page }) => {
  await page.goto('');
  // Cick archives link
  await page.getByRole('link', { name: 'Archives' }).click();
  await expect(page).toHaveURL('/archives/');
  // Assert posts are shown
  await expect(page.locator('.entry-content')).toBeDefined();
});