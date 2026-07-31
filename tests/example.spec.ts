import { test, expect } from '@playwright/test';

test('resolve merge conflicts', async()=> {
  
})




test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});



