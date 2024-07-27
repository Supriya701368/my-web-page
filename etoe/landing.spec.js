// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://my-web-app-five.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Create Next App");
});
test('cheack header text', async ({ page }) => {
  await page.goto('https://my-web-app-five.vercel.app/');

  // Expect a title "to contain" a substring.
  const eleRef = await page.getByTestId("header");
  await expect(eleRef).toHaveText("My first REACT app");
});

test('cheack footer text', async ({ page }) => {
  await page.goto('https://my-web-app-five.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText(/rights belons to me/i)).toBeVisible();
});

