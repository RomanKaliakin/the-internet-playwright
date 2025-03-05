import { Locator, Page } from '@playwright/test';

export class AddRemoveElementsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly addElementButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Add/Remove Elements' });
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.getByRole('button', { name: 'Delete' });
  }

  async clickAddElementTimes(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      await this.addElementButton.click();
    }
  }
}
