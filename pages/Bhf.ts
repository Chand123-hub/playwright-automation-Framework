import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async openHomePage() {
  await this.page.goto('/');
}
  
  async clickAbout() {
    await this.page.getByText('About').first().click();  }

  async clickSearchIcon() {
   await this.page.getByTitle('Search').first().click();
   await this.page.getByPlaceholder('Search').fill('Banner');
   await this.page.getByRole('option', {name: 'banner neurosciences'}).click()
   await this.page.waitForTimeout(5000);
  }

  async ourcampagin(){
    await this.page.getByRole('link', { name: 'Our Campaign' }).first().click();
    await this.page.getByRole('link', { name: 'Banner Cardiovascular' }).click();
    await this.page.getByRole('link', { name: 'Banner Cardiovascular: Innovation and Research' }).click();
    await this.page.getByRole('link', { name: 'Areas to Support' }).first().click();
}

 async Areastosupport(){
  await this.page.locator('li.dropmenu.dropdown').filter({ hasText: 'Areas to Support' }).hover();  
  await this.page.getByRole('link', { name: 'Banner MD Anderson Cancer Center' }).first().click();

}


    
    

  }

