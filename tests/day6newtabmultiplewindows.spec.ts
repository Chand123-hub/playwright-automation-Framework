import {test, expect} from '@playwright/test';
test.beforeEach(async ({ page }) => {
  // navigation lives here
   await page.goto('https://www.bannerhealthfoundation.org/');
});
test('Day 6 New Tab Multiple Windows', async ({page}) => {

    await page.getByText('About').first().click();
    
    
   const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
        page.getByText('Donate Now').first().click()
       
    ]);



});




//npx playwright test day6newtabmultiplewindows.spec.ts --project=chromium --headed