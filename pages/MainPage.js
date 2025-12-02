const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Launch your business with a free website' });
        // First button: Hero section
        this.createWebsiteBtnHero = page
            .getByRole('button', { name: 'Create Your Website' })
            .first();

        // Second button: CallToAction section
        this.createWebsiteBtnCTA = page
            .getByRole('button', { name: 'Create Your Website' })
            .nth(1);

        // Header elements
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
    }

    async goto() {
        await this.page.goto('https://main.soloist.ai/');
    }

    async startCreationHero() {
        await this.createWebsiteBtnHero.click({ force: true });
    }

    async startCreationCTA() {
        await this.createWebsiteBtnCTA.click({ force: true });
    }

    // Helper methods with force click to bypass Google credential picker overlay
    async clickToolsDropdown() {
        await this.toolsDropdown.click({ force: true });
    }

    async clickPricingLink() {
        await this.pricingLink.click({ force: true });
    }

    async clickSupportLink() {
        await this.supportLink.click({ force: true });
    }

    async clickSignInButton() {
        await this.signInButton.click({ force: true });
    }
};
