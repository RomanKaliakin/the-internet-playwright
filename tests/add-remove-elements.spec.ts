import { expect, test } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';

test.describe('Add/Remove Elements page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
  });

  test.describe('Initial State', () => {
    test('should display the Add/Remove Elements heading', async ({ page }) => {
      const addRemovePage = new AddRemoveElementsPage(page);
      await expect(addRemovePage.heading).toBeVisible();
    });

    test('should display the "Add Element" button by default', async ({
      page,
    }) => {
      const addRemovePage = new AddRemoveElementsPage(page);
      await expect(addRemovePage.addElementButton).toBeVisible();
      await expect(addRemovePage.addElementButton).toBeEnabled();
    });

    test('should not display any Delete buttons by default', async ({
      page,
    }) => {
      const addRemoveElementsPage = new AddRemoveElementsPage(page);
      await expect(addRemoveElementsPage.deleteButtons).toHaveCount(0);
    });
  });
  test.describe('Interaction', () => {});
});
