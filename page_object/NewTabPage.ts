import { Locator, Page } from '@playwright/test';

export class NewTabPage {
  page: Page;
  newTabLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTabLink = page.locator('[href="/windows/new"]');
  }

  public async navigate() {
    await this.page.goto('https://practice.expandtesting.com/windows');
  }
  async openNewTab() {
    await this.newTabLink.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.newTabLink.click({ force: true }),
    ]);

    await newPage.waitForLoadState();
    return newPage;
  }
}
