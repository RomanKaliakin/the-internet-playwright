import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcomeHeading: Locator;
  readonly examplesHeading: Locator;
  readonly forkMeOnGithubImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeHeading = page.getByRole('heading', {
      name: 'Welcome to the-internet',
    });
    this.examplesHeading = page.getByRole('heading', {
      name: 'Available Examples',
    });
    this.forkMeOnGithubImage = page.getByRole('img', {
      name: 'Fork me on GitHub',
    });
  }

  async goto() {
    await this.page.goto('/');
  }
}
