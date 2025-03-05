import { expect, test } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';

test.describe('Add/Remove Elements page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
  });

  test('should display the Add/Remove Elements heading', async ({ page }) => {
    const addRemovePage = new AddRemoveElementsPage(page);
    await expect(addRemovePage.heading).toBeVisible();
  });
});
