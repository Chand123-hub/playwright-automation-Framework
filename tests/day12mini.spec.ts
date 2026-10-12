import {test,expect} from "@playwright/test";
import { HpcPage } from "../pages/Hpc";
test. beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
});

test('Day 12 mini project', async ({ page }) => {
    const hpcPage = new HpcPage(page);

    await hpcPage.openHpcPage();
    //await hpcPage.hoverheaders();
   // await hpcPage.fileupload();
    //await expect(page.getByText('File Uploaded!')).toBeVisible();
    //await hpcPage.Multipletabs();
    await hpcPage.iframe();

            
})



//npx playwright test day12mini.spec.ts --project=chromium --headed
