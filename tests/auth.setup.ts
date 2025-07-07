import { test as setup, expect } from '@playwright/test';

const authFile: string = './.auth/user.json';

setup('authentication', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://demoqa.com/login', { timeout: 60000 });
  // await page.goto('https://demoqa.com/login', {
  //   waitUntil: 'domcontentloaded', // or 'networkidle'
  // });
  await page.getByPlaceholder('UserName').fill('Apple');
  await page.getByRole('textbox', { name: 'Password' }).fill('Gravity123*');
  await page.locator('#login').click();

  // Verify successful login
  await page.waitForURL('https://demoqa.com/profile');
  await expect(page.locator('[id="userName-value"]')).toHaveText('Apple');

  //Save all steps to storageState
  await page.context().storageState({ path: authFile });
});
