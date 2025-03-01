import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage should display the welcome heading', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.heading).toBeVisible();
});
