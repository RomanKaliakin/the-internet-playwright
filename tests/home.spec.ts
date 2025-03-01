import { expect, test } from '@playwright/test';

test('Homepage should display the welcome heading', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Welcome to the-internet' }),
  ).toBeVisible();
});
