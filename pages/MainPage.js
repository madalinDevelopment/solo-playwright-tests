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
    }

    async goto() {
        await this.page.goto('https://main.soloist.ai/');
    }

    async startCreationHero() {
        await this.createWebsiteBtnHero.click();
    }

    async startCreationCTA() {
        await this.createWebsiteBtnCTA.click();
    }
};
