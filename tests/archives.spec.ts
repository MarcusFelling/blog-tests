import { test, expect } from '@playwright/test';

test('should allow me to view archives', async ({ page }) => {
  await page.goto('');
  // Cick archives link
  await page.getByRole('link', { name: 'Archives' }).click();
  await expect(page).toHaveURL('/archives/');
  // Assert posts are shown
  await expect(page.locator('.entry-content')).toBeDefined();
});

test('should allow me to check all links', async ({ page, request }) => {
  await page.goto('/archives');
  // Get all links on archives page
  const links = await page.locator('.entry-content a:visible');
  const count = await links.count()
  // Loop through each link and check if response is 200
  for (let i = 0; i < count; i++) {
    const link = await links.nth(i);
    const href = await link.getAttribute('href');
    const response = await request.get(href);
    await expect(response.ok()).toBeTruthy();
  }
});