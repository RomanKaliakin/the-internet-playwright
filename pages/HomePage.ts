import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcomeHeading: Locator;
  readonly examplesHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeHeading = page.getByRole('heading', {
      name: 'Welcome to the-internet',
    });
    this.examplesHeading = page.getByRole('heading', {
      name: 'Available Examples',
    });
  }

  async goto() {
    await this.page.goto('/');
  }
}
