import {Page} from "@playwright/test";
export class HpcPage {
    readonly page:Page;
    constructor(page: Page) {
        this.page = page;
    }   

    async openHpcPage() {
        await this.page.goto('https://the-internet.herokuapp.com/iframe');
    }
    /*async hoverheaders() {
        await this.page.getByRole('link', { name: 'Programs' }).first().hover();
        await this.page.getByRole('link', { name: 'Youth' }).first().click();
        await this.page.getByRole('link', { name: 'Services' }).first().hover();
        
    }*/
        /*async fileupload(){
        const filePath = 'C:\\Users\\CHANDGS\\Desktop\\Chandana\\Internet expense\\exinternet.txt';
        await this.page.setInputFiles('input[type="file"]', filePath);
        await this.page.getByRole('button', { name: 'Upload' }).click();
        }

        async Multipletabs(){
            const pagePromise = this.page.context().waitForEvent('page');
            await this.page.getByRole('link', {name: 'Elemental Selenium'}).click();
            const newPage = await pagePromise;
            await newPage.waitForLoadState();
            await newPage.getByRole('link', {name: 'Get Involved'}).click();
}*/
        async iframe(){
           await this.page.frameLocator('mce_0_ifr').locator('.tox-notification__dismiss tox-button tox-button--naked tox-button--icon');
const frame =
this.page.frameLocator('#mce_0_ifr');

// Click inside editor
await frame.locator('body').click();

// Select existing text
await frame.locator('body').press('Control+A');

// Delete
await frame.locator('body').press('Backspace');

// Type new content
await frame.locator('body')
          .type('Hello Playwright');

}




}