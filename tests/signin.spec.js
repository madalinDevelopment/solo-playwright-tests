const { test, expect, request } = require('@playwright/test');
const { SignInModal } = require('../pages/SignInModal');
const { MainPage } = require('../pages/MainPage');
const { dismissCredentialPicker, getOTPFromRestmail, clearRestmailInbox } = require('./helpers');

test.describe('Full Sign In Flow', () => {
    let signInModal;
    let mainPage;

    test.beforeEach(async ({ page }) => {
        signInModal = new SignInModal(page);
        mainPage = new MainPage(page);
        await mainPage.goto();
        await dismissCredentialPicker(page);
    });

    test('should sign in successfully with email and OTP', async ({ page }) => {
        const email = 'madalinautotest01@restmail.net';
        const username = 'madalinautotest01';

        // Create API context and clear inbox
        const apiContext = await clearRestmailInbox(request, username);

        // 1. Initiate Sign In
        await mainPage.clickSignInButton();
        await signInModal.clickSignInWithEmail();
        await signInModal.fillEmail(email);
        await signInModal.submitEmail();

        // Wait for OTP state to load
        await expect(signInModal.verifyButton).toBeVisible({ timeout: 30000 });

        // 2. Poll for OTP
        const otpCode = await getOTPFromRestmail(apiContext, username);
        console.log(`Extracted OTP: ${otpCode}`);

        expect(otpCode, 'Failed to retrieve OTP code from email').not.toBeNull();

        // 3. Enter OTP and Verify
        await signInModal.enterOTP(otpCode);
        await signInModal.clickVerifyButton();

        // 4. Validate Signed In State
        // Wait for navigation or UI change indicating success
        // Expect "Sign In" button to be hidden
        await expect(mainPage.signInButton).toBeHidden({ timeout: 30000 });
    });
});
