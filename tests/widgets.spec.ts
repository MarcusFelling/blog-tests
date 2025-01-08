import { test, expect } from '@playwright/test';

test('should allow me to view widget content', async ({ page }) => {
  await page.goto('');
  // Recent Posts
  await expect(page.getByRole('heading', { name: 'Recent Blog Posts' })).toBeVisible();
  // Social
  await expect(page.getByRole('heading', { name: 'Social' })).toBeVisible();
});