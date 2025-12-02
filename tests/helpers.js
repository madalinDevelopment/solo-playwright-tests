/**
 * Helper utilities for Playwright tests
 */

/**
 * Dismisses Google credential picker if it appears on the page.
 * This overlay blocks clicks in Firefox and WebKit browsers.
 * 
 * @param {import('@playwright/test').Page} page - The Playwright page object
 */
async function dismissCredentialPicker(page) {
    await page.waitForTimeout(1000); // Give time for picker to appear
    try {
        const picker = page.locator('#credential_picker_container');
        if (await picker.isVisible({ timeout: 1000 })) {
            await page.evaluate(() => {
                const pickerEl = document.getElementById('credential_picker_container');
                if (pickerEl) pickerEl.remove();
            });
            await page.waitForTimeout(500); // Wait for removal to take effect
        }
    } catch (e) {
        // Credential picker not present, continue
    }
}

/**
 * Polls Restmail API for the latest email and extracts the OTP code.
 * 
 * @param {import('@playwright/test').APIRequestContext} request - The Playwright API request context
 * @param {string} username - The Restmail username
 * @param {number} retries - Number of retries (default 30)
 * @param {number} delay - Delay between retries in ms (default 1000)
 * @returns {Promise<string|null>} The extracted OTP code or null if not found
 */
async function getOTPFromRestmail(request, username, retries = 30, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        const response = await request.get(`https://restmail.net/mail/${username}`);
        if (response.ok()) {
            const emails = await response.json();
            if (emails.length > 0) {
                const latestEmail = emails[0];
                const content = latestEmail.text || latestEmail.html || latestEmail.subject;
                const match = content.match(/\b\d{6}\b/);
                if (match) {
                    return match[0];
                }
            }
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    return null;
    return null;
}

/**
 * Creates an API context and clears the inbox for the given username.
 * 
 * @param {import('@playwright/test').APIRequest} request - The Playwright APIRequest object
 * @param {string} username - The Restmail username
 * @returns {Promise<import('@playwright/test').APIRequestContext>} The created API context
 */
async function clearRestmailInbox(request, username) {
    const apiContext = await request.newContext();
    await apiContext.delete(`https://restmail.net/mail/${username}`);
    return apiContext;
}

module.exports = {
    dismissCredentialPicker,
    getOTPFromRestmail,
    clearRestmailInbox
};
