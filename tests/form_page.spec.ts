import { chromium, expect, test as it } from '@playwright/test';
import test from 'node:test';

it.beforeAll(() => {
  console.log('Before all tests');
});

it.describe.skip('Form Page', () => {
  it.beforeEach(() => {
    console.log('Before each test');
  });

  it.afterEach(() => {
    console.log('After each test');
  });
  it.afterAll(() => {
    console.log('After all tests');
  });
  it('test 1', () => {
    console.log('test 1');
  });
  it('test 2', () => {
    console.log('test 2');
  });
});

it.describe('FORM PAGE TYPE', () => {
  it('Fill all fields', async ({ page }) => {
    // const browser = await chromium.launch({ headless: false });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.goto(
      'https://www.lambdatest.com/selenium-playground/input-form-demo'
    );

    await page.locator('[id="name"]').fill('Mike');
    await page
      .locator(
        '[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]'
      )
      .pressSequentially('michael@gmail.com', { delay: 100 });
    await page.locator('input[placeholder="Password"]').fill('test1234');
    await page
      .locator('[for="companyname"]~[placeholder="Company"]')
      .fill('LambdaTest');
    await page
      .locator('label:has-text("Website") ~ input#websitename')
      .fill('https://www.lambdatest.com');
    await page.selectOption('select[name="country"]', {
      label: 'United States',
    });
    await page
      .locator('label:has-text("City") ~ input#inputCity')
      .fill('Denver');
    await page.getByPlaceholder('Address 1').fill('123 Main St');
    await page.getByPlaceholder('Address 2').fill('123 Main St');
    await page.getByRole('textbox', { name: 'State' }).fill('Colorado');
    await page.getByRole('textbox', { name: 'Zip Code' }).fill('10001');
    await page.pause();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(
      page.locator('h2:has-text("Input form validations")')
    ).toBeVisible();
  });
});
