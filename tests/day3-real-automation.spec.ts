import {test} from '@playwright/test';
test('Day 3 Task - real automation', async ({page}) => {
    let browser: string [] = ['https://playwright.dev/', 'https://www.bannerhealth.com/bhpprovider'];
    for(let Browser of browser){
        console.log(Browser);
        await page.goto(Browser);
        
 const title = await page.title();
    console.log(title);

    }               



    
    } );

