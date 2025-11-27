const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage');

test('should load the main page and verify title', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await expect(mainPage.heading).toBeVisible();
});

test('should navigate to onboarding when clicking create website hero', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.startCreationHero();
    await expect(page).toHaveURL(/.*onboarding/);
});

test('should navigate to onboarding when clicking create website cta', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.startCreationCTA();
    await expect(page).toHaveURL(/.*onboarding/);
});