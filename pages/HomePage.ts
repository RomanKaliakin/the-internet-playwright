import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Welcome to the-internet',
    });
  }

  async goto() {
    await this.page.goto('/');
  }
}
