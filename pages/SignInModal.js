const { expect } = require('@playwright/test');

exports.SignInModal = class SignInModal {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Auth Method State
        this.googleAuthButton = page.getByRole('button', { name: 'Sign in with Google' });
        this.emailAuthButton = page.getByRole('button', { name: 'Sign in with email' });

        // Email Input State
        this.emailInput = page.getByRole('textbox').first();
        this.emailSubmitButton = page.getByRole('button', { name: 'Email me a code' });

        // OTP Input State
        this.otpInput = page.getByText('Please enter OTP character 1')
        this.verifyButton = page.getByRole('button', { name: 'Verify account' });
        this.resendCodeButton = page.getByRole('button', { name: 'Send new code' });

        // Error/Alert
        this.alert = page.getByRole('alert');
    }

    async clickSignInWithEmail() {
        await this.emailAuthButton.click();
    }

    async fillEmail(email) {
        await this.emailInput.fill(email);
    }

    async submitEmail() {
        await this.emailSubmitButton.click({ force: true });
    }

    async enterOTP(code) {
        await this.page.keyboard.insertText(code);
    }

    async clickVerifyButton() {
        await this.verifyButton.click({ force: true });
    }
};
