import {test} from '@playwright/test';
test('Day 2 Task - Arrays and Loops', async ({page}) => {
    let Testenv: string = 'QA';
    let testversion: number = 1.0;
    let istestexecuted: boolean = true;
    console.log('Test Environment:', Testenv);
    console.log('Test Version:', testversion);
    console.log('Is Test Executed:', istestexecuted);
    if (istestexecuted) {
        console.log('Test execution is done');
    }
    let Sites: string[] = ['https://www.bannerhealth.com/', 'https://www.bannerhealth.com/medicare'];
    for (let site of Sites) {
        console.log(site);

        await page.goto(site);
        const title = await page.title();
        console.log('Page Title:', title);  
        
        if (site.includes('medicare')) {
            console.log('This site is related to Medicare');
        }   
    }

});
