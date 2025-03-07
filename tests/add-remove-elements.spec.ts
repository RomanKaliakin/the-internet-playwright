import { expect, test } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';

test.describe('Add/Remove Elements page', () => {
  let addRemoveElementsPage: AddRemoveElementsPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
    addRemoveElementsPage = new AddRemoveElementsPage(page);
  });

  test.describe('Initial State', () => {
    test('should display the Add/Remove Elements heading', async () => {
      await expect(addRemoveElementsPage.heading).toBeVisible();
    });

    test('should display the "Add Element" button by default', async () => {
      await expect(addRemoveElementsPage.addElementButton).toBeVisible();
      await expect(addRemoveElementsPage.addElementButton).toBeEnabled();
    });

    test('should not display any Delete buttons by default', async () => {
      await expect(addRemoveElementsPage.deleteButtons).toHaveCount(0);
    });
  });

  test.describe('Interaction', () => {
    test('should add multiple Delete buttons', async () => {
      await addRemoveElementsPage.clickAddElementTimes(5);
      await expect(addRemoveElementsPage.deleteButtons).toHaveCount(5);
    });

    test('should add and then delete a Delete button', async () => {
      await addRemoveElementsPage.clickAddElementTimes(1);
      await expect(addRemoveElementsPage.deleteButtons).toHaveCount(1);

      await addRemoveElementsPage.deleteButtons.first().click();
      await expect(addRemoveElementsPage.deleteButtons).toHaveCount(0);
    });
  });
});
