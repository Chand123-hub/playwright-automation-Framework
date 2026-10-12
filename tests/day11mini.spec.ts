import {test, expect} from '@playwright/test';
import { BhpHomePage } from '../pages/Bhphome'; 
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bannerhealth.com/bhpprovider');
});

test('Day 11 mini project', async ({ page }) => {
    const bhpHomePage = new BhpHomePage(page);
    await bhpHomePage.openBhpHomePage();
    
    await bhpHomePage.Aboutus();

    await bhpHomePage.clickSearchIcon();

    await bhpHomePage.Searchpagination();
    
    
}); 


//npx playwright test day11mini.spec.ts --project=chromium --headed