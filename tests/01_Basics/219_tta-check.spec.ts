//Task - by using codegen cammand , open the website and record the usename and password and paste the code in this file 
//make sure headless is false in playwright.config.ts file and run the test 
//cmd : playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('Swapna');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('swapna');
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(5000);
});