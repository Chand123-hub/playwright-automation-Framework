import { Page } from "@playwright/test";
export class BlogHomePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }   

    async openBlogHomePage() {
        await this.page.goto('https://www.bannerhealth.com/healthcareblog');
    }  
    
    async clickAdviseme(){
        await this.page.getByRole('link', { name: 'Advise Me' }).first().click();
    }
    async clickInspireme(){
        await this.page.getByRole('link', { name: 'Inspire Me' }).click();
    }
    async clickTeachme(){   
        await this.page.getByRole('link', { name: 'Teach Me' }).first().click();
    }
    async verifyaccessability(){
        await this.page.getByRole('link', { name: 'Enable Accessibility'}).click();
}
async verifyfooterlinks(){
const footerLinks = this.page.locator('footer a');
const count = await footerLinks.count();
console.log("Total footer links:", count);
}
async emailsignup(){
        await this.page.getByRole('textbox').fill('chandgs@gmail.com');
        await this.page.getByText('Sign Up').first().click();
    }


        
    }
   /* 
*/
    
    
