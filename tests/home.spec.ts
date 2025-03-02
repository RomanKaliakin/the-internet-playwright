import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Homepage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('should display the welcome heading', async () => {
    await expect(homePage.welcomeHeading).toBeVisible();
  });

  test('should display the Available Examples heading', async () => {
    await expect(homePage.examplesHeading).toBeVisible();
  });

  test('Homepage should display the Fork me on GitHub image', async () => {
    await expect(homePage.forkMeOnGithubImage).toBeVisible();
  });

  test('Homepage footer should display "Powered by Elemental Selenium" text', async () => {
    await expect(homePage.footer).toContainText(
      'Powered by Elemental Selenium',
    );
  });
});
