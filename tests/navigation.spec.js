const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage');
const { dismissCredentialPicker } = require('./helpers');

test.describe('Navigation Tests', () => {
    let mainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        await mainPage.goto();
        await dismissCredentialPicker(page);
    });

    test('should navigate to home when clicking Solo logo', async ({ page }) => {
        await mainPage.soloLogo.click({ force: true });
        await expect(page).toHaveURL('https://main.soloist.ai/');
    });

    test('should navigate to Mozilla when clicking Mozilla logo', async ({ page }) => {
        const pagePromise = page.context().waitForEvent('page');
        await mainPage.mozillaLogo.click({ force: true });
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*mozilla.*/);
    });

    test('should navigate to Pricing page', async ({ page }) => {
        await mainPage.clickPricingLink();
        await expect(page).toHaveURL(/.*pricing/);
    });

    test('should navigate to Support page', async ({ page }) => {
        const pagePromise = page.context().waitForEvent('page');
        await mainPage.clickSupportLink();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*support.*/);
    });

    test('should navigate to Business Name Creator', async ({ page }) => {
        await mainPage.clickToolsDropdown();
        await mainPage.businessNameCreator.click({ force: true });
        await expect(page).toHaveURL(/.*business-name.*/);
    });

    test('should navigate to Business Idea Creator', async ({ page }) => {
        await mainPage.clickToolsDropdown();
        await mainPage.businessIdeaCreator.click({ force: true });
        await expect(page).toHaveURL(/.*business-idea.*/);
    });

    test('should navigate to Google Ad Creator', async ({ page }) => {
        await mainPage.clickToolsDropdown();
        await mainPage.googleAdCreator.click({ force: true });
        await expect(page).toHaveURL(/.*google-ad.*/);
    });
});
