const { test, expect } = require('@playwright/test');
const { SignInModal } = require('../pages/SignInModal');
const { MainPage } = require('../pages/MainPage');
const { dismissCredentialPicker } = require('./helpers');

test.describe('Sign In Modal', () => {
    let signInModal;
    let mainPage;

    test.beforeEach(async ({ page }) => {
        signInModal = new SignInModal(page);
        mainPage = new MainPage(page);
        await mainPage.goto();
        await dismissCredentialPicker(page);
    });

    test('should open sign in modal', async () => {
        await mainPage.clickSignInButton();
        await expect(signInModal.googleAuthButton).toBeVisible();
        await expect(signInModal.emailAuthButton).toBeVisible();
    });

    test('should navigate to email input', async () => {
        await mainPage.clickSignInButton();
        await signInModal.clickSignInWithEmail();
        await expect(signInModal.emailInput).toBeVisible();
        await expect(signInModal.emailSubmitButton).toBeVisible();
    });

    test('should navigate to OTP input after entering email', async () => {
        await mainPage.clickSignInButton();
        await signInModal.clickSignInWithEmail();
        await signInModal.fillEmail('soloist.test.user@gmail.com');
        await signInModal.submitEmail();

        // Wait for the email submit button to disappear to confirm transition started
        await expect(signInModal.emailSubmitButton).toBeHidden({ timeout: 10000 });
        await expect(signInModal.verifyButton).toBeVisible();
        await expect(signInModal.resendCodeButton).toBeVisible();
    });

    test('should enter OTP code in input fields', async ({ page }) => {
        await mainPage.clickSignInButton();
        await signInModal.clickSignInWithEmail();
        await signInModal.fillEmail('soloist.test.user@gmail.com');
        await signInModal.submitEmail();

        // Wait for OTP state to load by checking for verify button
        await expect(signInModal.verifyButton).toBeVisible({ timeout: 30000 });

        // Generate random 6-digit OTP
        const randomOTP = '123456';

        // Enter the OTP
        await signInModal.enterOTP(randomOTP);
        await expect(signInModal.verifyButton).toBeVisible();
    });
});
