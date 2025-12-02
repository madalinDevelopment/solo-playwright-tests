const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage');
const { dismissCredentialPicker } = require('./helpers');

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