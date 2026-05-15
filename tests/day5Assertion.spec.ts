import {test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // navigation lives here
   await page.goto('https://www.bannerhealthfoundation.org/');
});

test('Day 5 Assertions', async ({page}) => {
   
    await expect(page).toHaveTitle(/Banner Health Foundation/); 
    await expect(page).toHaveURL(/bannerhealthfoundation/);
    
    await page.getByText('About').first().click();
    await expect(page).toHaveURL(/About/);
    

    await page.getByTitle('Search').first().click();
    await page.getByPlaceholder('Search').fill('panner');
    await expect(page.getByPlaceholder('Search')).toHaveValue('Banner');
    await page.waitForTimeout(5000);









});


//npx playwright test day5Assertion.spec.ts --project=chromium --headed