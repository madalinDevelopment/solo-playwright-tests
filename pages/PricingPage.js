const { expect } = require('@playwright/test');

exports.PricingPage = class PricingPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // ========== HEADER ELEMENTS (Reused from MainPage) ==========
        this.soloLogo = page.locator('a[href="https://main.soloist.ai/"]').first();
        this.mozillaLogo = page.locator('a[href*="mozilla.org"]').first();
        this.pricingLink = page.getByRole('button', { name: 'Pricing' }).first();
        this.supportLink = page.getByRole('button', { name: 'Support' }).first();
        this.toolsDropdown = page.getByRole('button', { name: 'Tools' }).first();
        this.signInButton = page.getByRole('button', { name: 'Sign In' }).first();

        // Tools dropdown items
        this.businessNameCreator = page.getByRole('link', { name: 'Business Name Creator' }).first();
        this.businessIdeaCreator = page.getByRole('link', { name: 'Business Idea Creator' }).first();
        this.googleAdCreator = page.getByRole('link', { name: 'Google Ad Creator' }).first();

        // ========== HERO SECTION ==========
        this.heroHeading = page.getByRole('heading', { name: 'Pricing' });
        this.heroSubheading = page.getByText('Launch your business with a free website and connect your custom domain for free.');

        // ========== PLAN CARDS ==========
        // Used for visibility checks
        this.freePlanCard = page.locator('div').filter({ has: page.getByRole('button', { name: 'Create a Website' }) }).last();
        this.proPlanCard = page.locator('div').filter({ has: page.getByRole('button', { name: 'Get Started' }) }).last();

        // ========== FREE PLAN COLUMN ==========
        this.freePlanTitle = page.getByText('Free', { exact: true }).first();
        this.freePlanPrice = page.getByText('$0', { exact: true }).first();
        this.freePlanSubtext = page.getByText('Try today! - No credit card required');
        this.freePlanButton = page.getByRole('button', { name: 'Create a Website' });

        // Free Plan Features
        this.freePlanFeature1 = page.getByText('1 published website');
        this.freePlanFeature2 = page.getByText('3 draft websites');
        this.freePlanFeature3 = page.getByText('Connect 1 custom domain');
        this.freePlanFeature4 = page.getByText('Up to 10 uploaded images per site');
        this.freePlanFeature5 = page.getByText('Invite 1 editor per site');

        // ========== PRO PLAN COLUMN ==========
        this.proPlanTitle = page.getByText('Pro', { exact: true }).first();
        this.proPlanPrice = page.getByText('$20/month')
        this.proPlanSaveBadge = page.getByText('Save $60/year');
        this.proPlanBillingText = page.getByText('with annual billing');
        this.proPlanButton = page.getByRole('button', { name: 'Get Started' });

        // Pro Plan Features
        this.proPlanFeature1 = page.getByText('3 published websites');
        this.proPlanFeature2 = page.getByText('25 draft websites');
        this.proPlanFeature3 = page.getByText('3 custom domains');
        this.proPlanFeature4 = page.getByText('100 uploaded images');
        this.proPlanFeature5 = page.getByText('Invite 5 editors per site');
        this.proPlanFeature6 = page.getByText('Free new custom domain');
        this.proPlanFeature7 = page.getByText('Duplicate your websites');
        this.proPlanFeature8 = page.getByText('Custom code in <head>');
        this.proPlanFeature9 = page.getByText('Hide "Made with Solo" badge');
    }

    async goto() {
        await this.page.goto('https://main.soloist.ai/pricing');
    }

    // ========== HELPER METHODS ==========

    async clickToolsDropdown() {
        await this.toolsDropdown.click({ force: true });
    }

    async clickPricingLink() {
        await this.pricingLink.click({ force: true });
    }

    async clickSupportLink() {
        await this.supportLink.click({ force: true });
    }

    async clickFreePlanButton() {
        await this.freePlanButton.click({ force: true });
    }

    async clickProPlanButton() {
        await this.proPlanButton.click({ force: true });
    }

};
