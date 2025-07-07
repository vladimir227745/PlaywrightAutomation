import { Page } from '@playwright/test';

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoweb(path: string) {
    await this.page.goto('/selenium-playground' + path);
    console.log(`Navigate to: ${this.page.url()}`);
    console.log(` ${this.page.url()}`);
  }

  async clickOnElement(selector: string) {
    await this.page.click(selector);
    console.log(`Clicked on element with selector: ${this.gotoweb}`);
  }
}
