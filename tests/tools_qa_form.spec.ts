import { expect, test as it } from '@playwright/test';
import { faker } from '@faker-js/faker';

it.describe('TOOLS QA PRACTICE FORM', () => {
  const imageName = faker.string.sample() + '.png';
  const imageBuffer = Buffer.from(
    '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="blue"/></svg>'
  );
  it('Fill all fields', async ({ page }) => {
    await page.goto(
      'https://demoqa.com/automation-practice-form#google_vignette'
    );
    await page.locator('[id="firstName"]').fill('Andrew');
    await page.fill('[placeholder="Last Name"]', 'Smith');
    //await page.locator('[id="lastName"]').fill('Smith');
    await page
      .locator('[class="mr-sm-2 form-control"]')
      .fill('mailman@mail.com');
    await page.locator('[for="gender-radio-1"]').click();
    //await page.getByPlaceholder('placeholder="Mobile Number"').fill('1234567890');
    //await page.pause();
    await page.locator('#userNumber').fill('1234567890');
    await page.locator('input[class="form-control"]').fill('03 Jun 2025');
    //await page.getByTitle('for="gender-radio-1"').click();
    await page.locator('[id="subjectsInput"]').fill('all');
    await page.locator('label[for="hobbies-checkbox-1"]').click(); // used label here to avoid iframe ads, instead of directly using id
    await page.locator('[id="uploadPicture"]').setInputFiles([
      {
        name: imageName,
        mimeType: 'image/png',
        buffer: imageBuffer,
      },
    ]);
    await page
      //.locator('label:has-text("Current Address") ~ textarea#currentAddress')
      .locator('[id="currentAddress"]')
      .fill('1010 washington av');
    // Comm + shift + P >> print 'emulate focus' to pause dropdown
    await page.locator('[id="react-select-3-input"]').fill('Haryana');
    await page.keyboard.press('Enter');
    await page.locator('[id="city"]');
    // await expect(page.locator('input#react-select-4-input')).toHaveAttribute(
    //   'Disabled',
    //   'true'
    // );
    await page.locator('[id="react-select-4-input"]').fill('Panipat');
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(
      page.locator(
        '#example-modal-sizes-title-lg:has-text("Thanks for submitting the form")'
      )
    ).toBeVisible();
  });
});
