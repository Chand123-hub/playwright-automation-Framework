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
    await this.page.getByText('About').first().click();
  }
  async clickSearchIcon() {
   await this.page.getByTitle('Search').first().click();
   await this.page.getByPlaceholder('Search').fill('Banner');
   await this.page.waitForTimeout(5000);
  }
    
    

  }

