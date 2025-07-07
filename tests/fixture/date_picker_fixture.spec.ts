import { test as it, expect } from '../page_object/base_page';

it.describe('Date Picker with fixture', () => {
  it('Navigate to date picker page using fixture', async ({
    datePicker,
    page,
  }) => {
    await datePicker.navigateToDatePicker();
    await datePicker.verifyHeader();
    await datePicker.dateFromToday();
    console.log(page.url());
    await expect(page).toHaveURL(/jquery-date-picker-demo/);
  });
});
