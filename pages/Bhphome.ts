import {Page} from "@playwright/test";
export class BhpHomePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }   

    async openBhpHomePage() {
        await this.page.goto('https://www.bannerhealth.com/bhpprovider');

    }
         async Aboutus(){
        await this.page.getByRole('link', { name: 'About Us' }).first().click();
        await this.page.getByText('Contact Us').first().click();
        await this.page.getByRole('link', { name: 'Enable Accessibility'}).click();
        await this.page.getByRole('link', { name: 'Exit Accessibility'}).click();
    }                                                       

    async clickSearchIcon() {
        await this.page.getByTitle('search').first().click();
        await this.page.getByPlaceholder('Search').first().fill('Banner');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
    }

    async Searchpagination(){
        await this.page.getByLabel('Go to Page 2').click();
        await this.page.getByLabel('Go to Page 1').click();
        await this.page.waitForTimeout(5000);
    }
    
};
