import { test, expect } from '@playwright/test';

test('should allow me to view landing page', async ({ page }) => {
  await page.goto('');
  // Click home link
  await page.getByRole('link', { name: 'Marcus Felling' }).click();
  await expect(page).toHaveURL('');
  // Assert site description is correct
  await expect(page.locator('.site-description')).toHaveText('A blog about things I learn at the keyboard: DevOps, CI/CD, Cloud, Automation, to name a few….');
});