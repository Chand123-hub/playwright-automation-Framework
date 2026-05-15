import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';


test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('Day 7 simple POM test', async ({ page }) => {

  // ✅ Step 1: create object of HomePage class
  const homePage = new HomePage(page);

  // ✅ Step 2: open website using class
  await homePage.openHomePage();

  // ✅ Step 3: verify title
  await expect(page).toHaveTitle(/Banner Health Foundation/);

  

  // ✅ Step 6: click about using class
  await homePage.clickAbout();
  

  //✅ Step 4: click search icon using class
  await homePage.clickSearchIcon();
  await expect(page.getByPlaceholder('Search')).toHaveValue('Banner');
   await page.waitForTimeout(5000);

   

  




});


//npx playwright test day7model.spec.ts --project=chromium --headed