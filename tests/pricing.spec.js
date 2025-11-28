const { test, expect } = require('@playwright/test');
const { PricingPage } = require('../pages/PricingPage');
const { dismissCredentialPicker } = require('./helpers');

test.describe('Pricing Page UI Elements', () => {
    let pricingPage;

    test.beforeEach(async ({ page }) => {
        pricingPage = new PricingPage(page);
        await pricingPage.goto();
        await dismissCredentialPicker(page);
    });

    test.describe('Header Elements', () => {
        test('should display Solo logo', async () => {
            await expect(pricingPage.soloLogo).toBeVisible();
        });

        test('should display Mozilla logo', async () => {
            await expect(pricingPage.mozillaLogo).toBeVisible();
        });

        test('should display Pricing link', async () => {
            await expect(pricingPage.pricingLink).toBeVisible();
        });

        test('should display Support link', async () => {
            await expect(pricingPage.supportLink).toBeVisible();
        });

        test('should display Tools dropdown', async () => {
            await expect(pricingPage.toolsDropdown).toBeVisible();
        });

        test('should display Sign In button', async () => {
            await expect(pricingPage.signInButton).toBeVisible();
        });

        test('should display all Tools dropdown items when clicked', async ({ page }) => {
            await pricingPage.clickToolsDropdown();
            await expect(pricingPage.businessNameCreator).toBeVisible();
            await expect(pricingPage.businessIdeaCreator).toBeVisible();
            await expect(pricingPage.googleAdCreator).toBeVisible();
        });
    });

    test.describe('Hero Section', () => {
        test('should display hero heading', async () => {
            await expect(pricingPage.heroHeading).toBeVisible();
            await expect(pricingPage.heroHeading).toHaveText('Pricing');
        });

        test('should display hero subheading', async () => {
            await expect(pricingPage.heroSubheading).toBeVisible();
            await expect(pricingPage.heroSubheading).toContainText('Launch your business with a free website');
        });
    });

    test.describe('Free Plan Column', () => {
        test('should display Free plan title', async () => {
            await expect(pricingPage.freePlanTitle).toBeVisible();
            await expect(pricingPage.freePlanTitle).toHaveText('Free');
        });

        test('should display Free plan price', async () => {
            await expect(pricingPage.freePlanPrice).toBeVisible();
            await expect(pricingPage.freePlanPrice).toContainText('$0');
        });

        test('should display Free plan subtext', async () => {
            await expect(pricingPage.freePlanSubtext).toBeVisible();
            await expect(pricingPage.freePlanSubtext).toContainText('No credit card required');
        });

        test('should display Free plan button', async () => {
            await expect(pricingPage.freePlanButton).toBeVisible();
            await expect(pricingPage.freePlanButton).toHaveText('Create a Website');
        });

        test('should display "1 published website" feature', async () => {
            await expect(pricingPage.freePlanFeature1).toBeVisible();
        });

        test('should display "3 draft websites" feature', async () => {
            await expect(pricingPage.freePlanFeature2).toBeVisible();
        });

        test('should display "Connect 1 custom domain" feature', async () => {
            await expect(pricingPage.freePlanFeature3).toBeVisible();
        });

        test('should display "Up to 10 uploaded images per site" feature', async () => {
            await expect(pricingPage.freePlanFeature4).toBeVisible();
        });

        test('should display "Invite 1 editor per site" feature', async () => {
            await expect(pricingPage.freePlanFeature5).toBeVisible();
        });

        test('should display all Free plan features', async () => {
            await expect(pricingPage.freePlanFeature1).toBeVisible();
            await expect(pricingPage.freePlanFeature2).toBeVisible();
            await expect(pricingPage.freePlanFeature3).toBeVisible();
            await expect(pricingPage.freePlanFeature4).toBeVisible();
            await expect(pricingPage.freePlanFeature5).toBeVisible();
        });
    });

    test.describe('Pro Plan Column', () => {
        test('should display Pro plan title', async () => {
            await expect(pricingPage.proPlanTitle).toBeVisible();
            await expect(pricingPage.proPlanTitle).toHaveText('Pro');
        });

        test('should display Pro plan price', async () => {
            await expect(pricingPage.proPlanPrice).toBeVisible();
            await expect(pricingPage.proPlanPrice).toHaveText('$20/month');

        });

        test('should display Pro plan save badge', async () => {
            await expect(pricingPage.proPlanSaveBadge).toBeVisible();
            await expect(pricingPage.proPlanSaveBadge).toContainText('Save $60/year');
        });

        test('should display Pro plan billing text', async () => {
            await expect(pricingPage.proPlanBillingText).toBeVisible();
            await expect(pricingPage.proPlanBillingText).toContainText('with annual billing');
        });

        test('should display Pro plan button', async () => {
            await expect(pricingPage.proPlanButton).toBeVisible();
            await expect(pricingPage.proPlanButton).toHaveText('Get Started');
        });

        test('should display "3 published websites" feature', async () => {
            await expect(pricingPage.proPlanFeature1).toBeVisible();
        });

        test('should display "25 draft websites" feature', async () => {
            await expect(pricingPage.proPlanFeature2).toBeVisible();
        });

        test('should display "3 custom domains" feature', async () => {
            await expect(pricingPage.proPlanFeature3).toBeVisible();
        });

        test('should display "100 uploaded images" feature', async () => {
            await expect(pricingPage.proPlanFeature4).toBeVisible();
        });

        test('should display "5 editors" feature', async () => {
            await expect(pricingPage.proPlanFeature5).toBeVisible();
        });

        test('should display "Free new custom domain" feature', async () => {
            await expect(pricingPage.proPlanFeature6).toBeVisible();
        });

        test('should display "Duplicate your websites" feature', async () => {
            await expect(pricingPage.proPlanFeature7).toBeVisible();
        });

        test('should display "Custom code in <head>" feature', async () => {
            await expect(pricingPage.proPlanFeature8).toBeVisible();
        });

        test('should display "Hide "Made with Solo" badge" feature', async () => {
            await expect(pricingPage.proPlanFeature9).toBeVisible();
        });

        test('should display all Pro plan features', async () => {
            await expect(pricingPage.proPlanFeature1).toBeVisible();
            await expect(pricingPage.proPlanFeature2).toBeVisible();
            await expect(pricingPage.proPlanFeature3).toBeVisible();
            await expect(pricingPage.proPlanFeature4).toBeVisible();
            await expect(pricingPage.proPlanFeature5).toBeVisible();
            await expect(pricingPage.proPlanFeature6).toBeVisible();
            await expect(pricingPage.proPlanFeature7).toBeVisible();
            await expect(pricingPage.proPlanFeature8).toBeVisible();
            await expect(pricingPage.proPlanFeature9).toBeVisible();
        });
    });
});
