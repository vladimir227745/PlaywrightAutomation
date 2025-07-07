import { expect, FrameLocator, test as it } from '@playwright/test';

it.describe('Iframe Test', () => {
  it('iframe test', async ({ page }) => {
    const url = 'https://www.lambdatest.com/selenium-playground/nested-frames/';
    await page.goto(url);

    const frameBottom: FrameLocator = page.frameLocator(
      '[name="frame-bottom"]'
    );

    const leftFrameText: string | null = await frameBottom
      .frameLocator('[name="frame-left"]')
      .locator('body')
      .textContent();

    const middleFrameText: string | null = await frameBottom
      .frameLocator('[name="frame-middle"]')
      .locator('body')
      .textContent();

    const rightFrameText: string | null = await frameBottom
      .frameLocator('[name="frame-right"]')
      .locator('body')
      .textContent();

    //Assert the text content of the frames
    expect(leftFrameText).toContain('Left');
    expect(middleFrameText).toContain('Middle');
    expect(rightFrameText).toContain('Right');
  });
});
