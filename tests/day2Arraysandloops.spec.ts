import {test} from '@playwright/test';

test('Arrays and Loops practice', async () => {
  let fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    console.log('Fruits array:', fruits);
    console.log('First fruit:', fruits[0]);
    console.log('Number of fruits:', fruits.length);

    console.log('Iterating over fruits using for loop:');
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    console.log('Iterating over fruits using for...of loop:');
    for (let fruit of fruits) {
        console.log(fruit);
    }
    console.log('Iterating over fruits using forEach method:');
    fruits.forEach((fruit, index) => {
        console.log(`${index}: ${fruit}`);
    });
});
