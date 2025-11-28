const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage');
const { dismissCredentialPicker } = require('./helpers');

test('should load the main page and verify title', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await dismissCredentialPicker(page);
    await expect(mainPage.heading).toBeVisible();
});

test('should navigate to onboarding when clicking create website hero', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await dismissCredentialPicker(page);
    await mainPage.startCreationHero();
    await expect(page).toHaveURL(/.*onboarding/);
});

test('should navigate to onboarding when clicking create website cta', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await dismissCredentialPicker(page);
    await mainPage.startCreationCTA();
    await expect(page).toHaveURL(/.*onboarding/);
});

test('should display header elements', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await dismissCredentialPicker(page);

    await expect(mainPage.soloLogo).toBeVisible();
    await expect(mainPage.mozillaLogo).toBeVisible();
    await expect(mainPage.pricingLink).toBeVisible();
    await expect(mainPage.supportLink).toBeVisible();
    await expect(mainPage.toolsDropdown).toBeVisible();
    await expect(mainPage.signInButton).toBeVisible();
});

test('should display tools dropdown elements', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await dismissCredentialPicker(page);
    await mainPage.clickToolsDropdown();
    await expect(mainPage.businessNameCreator).toBeVisible();
    await expect(mainPage.businessIdeaCreator).toBeVisible();
    await expect(mainPage.googleAdCreator).toBeVisible();
});