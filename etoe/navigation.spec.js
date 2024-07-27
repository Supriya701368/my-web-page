const { test, expect } = require('@playwright/test');
const { waitFor } = require('@testing-library/react');

test('click menu items', async ({ page }) => {
    await page.goto('https://my-web-app-five.vercel.app/');

    // Expect a title "to contain" a substring.
    await page.getByRole('link', { name: 'About' }).click();


    await page.waitForTimeout(5000); // Wait for 3 seconds

    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(5000); // Wait for 3 seconds

    await page.getByRole('link', { name: 'Count' }).click();


    await page.waitForTimeout(5000); // Wait for 3 seconds

    await page.getByRole('link', { name: 'Photos' }).click();
    await page.waitForTimeout(5000); // Wait for 3 seconds

    await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(5000); // Wait for 3 seconds


});