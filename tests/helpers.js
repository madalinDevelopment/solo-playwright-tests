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

module.exports = {
    dismissCredentialPicker
};
