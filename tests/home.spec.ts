import { test, expect } from '@playwright/test';

test('Homepage should display the welcome heading', async ({page}) => {
    // Given I navigate to the homepage
    await page.goto('/');

    // Then welcome heading should be visible
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
})