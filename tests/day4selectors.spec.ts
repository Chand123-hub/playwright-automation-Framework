import {test} from '@playwright/test';
test('Day 4 Slectors - CSS and XPath', async ({page}) => {
    await page.goto('https://www.bannerhealthfoundation.org/');
    
   //await page.getByText('Donate Now'). first().click();
  //await page.waitForTimeout(5000);

    //await page.getByText('About').first().click();
    //await page.waitForTimeout(5000);

    page.getByText('News').first().click();
    await page.waitForTimeout(5000);

    page.getByRole('link', { name: 'Back To Banner Health Foundation' }).first().click();
    await page.waitForTimeout(5000);

    await page.getByTitle('Search').first().click();
    await page.waitForTimeout(5000);

    await page.getByPlaceholder('Search').fill('Banner');
    await page.waitForTimeout(5000);

    
 

    
});


    

    //npx playwright test day4selectors.spec.ts --project=chromium --headed