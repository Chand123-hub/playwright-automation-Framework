import { test } from '@playwright/test';

test('TypeScript basics', async () => {
  let name: string = 'Chandana';
  let age: number = 25;
  let isLearner: boolean = true;
  let role: string = "QA Engineer";
  console.log(name, age, isLearner, role);
});
