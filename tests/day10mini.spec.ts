import {test, expect} from '@playwright/test';
import { BlogHomePage } from '../pages/bloghome';
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.bannerhealth.com/healthcareblog');
});

test('Day 10 mini project', async ({ page }) => {
    const blogHomePage = new BlogHomePage(page);
    await blogHomePage.openBlogHomePage();
    
    await blogHomePage.clickAdviseme();
    await expect(page).toHaveTitle(/Advise Me/);
    const blogs = page.locator('a[href*="/healthcareblog/"]');
    const count = await blogs.count();
    console.log("Number of advice me blogs:", count);

        await blogHomePage.clickInspireme();
    await expect(page).toHaveTitle(/Inspire Me/);
    const inspireBlogs = page.locator('a[href*="/healthcareblog/"]');
    const inspireCount = await inspireBlogs.count();
    console.log("Number of Inspire Me blogs:", inspireCount);

        await blogHomePage.clickTeachme();
    await expect(page).toHaveTitle(/Teach Me/);
    const teachBlogs = page.locator('a[href*="/healthcareblog/"]');
    const teachCount = await teachBlogs.count();
    console.log("Number of Teach Me blogs:", teachCount);

    
    await blogHomePage.verifyaccessability();
    await page.waitForTimeout(5000);
    await blogHomePage.verifyfooterlinks();
    await blogHomePage.emailsignup();
    await blogHomePage.search();
});



//npx playwright test day10mini.spec.ts --project=chromium --headed
