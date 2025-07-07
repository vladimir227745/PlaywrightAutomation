import { test as it, expect } from './lc_login';

it('User lands on profile after login', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/.*\/profile\//);
  await expect(loggedInPage.locator('.me-2 ~ h1')).toContainText(
    'Vladimir Sorokoletov'
  );
});
