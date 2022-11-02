import { test, expect } from '@playwright/test';

test('should allow me to search blog posts', async ({ page }) => {
  await page.goto('');
  // Click search box
  await page.getByRole('button', { name: ' Search' }).click();
  await page.getByPlaceholder('Search …').click();
  // Search "devops" and press enter
  await page.getByPlaceholder('Search …').fill('devops');
  await page.getByPlaceholder('Search …').press('Enter');
  await expect(page).toHaveURL('?s=devops');
  // Should container heading for search
  await page.getByRole('heading', { name: 'Search Results for: devops' }).click();
  // Click link to older posts
  await page.getByRole('link', { name: 'Older posts' }).click();
  await expect(page).toHaveURL('/page/2/?s=devops');
  // Click link to newer posts
  await page.getByRole('link', { name: 'Newer posts' }).click();
  await expect(page).toHaveURL('/?s=devops');
});