import { test } from '@playwright/test';

test('Variables practice', async () => {
  let name: string = 'Chandana';
  let role: string = 'QA Engineer';
  let experience: number = 4;
  let learningPlaywright: boolean = true;

  console.log(name);
  console.log(role);
  console.log(experience);
  console.log(learningPlaywright);
  
  if (learningPlaywright) {
  console.log('Learning Playwright is in progress');
}

});