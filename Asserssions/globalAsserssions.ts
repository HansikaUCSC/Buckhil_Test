import { expect, Page } from '@playwright/test'
export class Assertions {
    private page: Page
    private statusCode: number
    constructor(page) {
        this.page = page
    }
    // Verify  the page header
    async assertThePageHeader(headerElement, headerText) {
        await expect(this.page.locator(headerElement)).toHaveText(headerText)
    }
    // Verify the presence of the Element
    static async assertPresenceOfTheElement(element) {
        await expect(element).toBeVisible()
    }

    // Set up an event listener to capture the response code
    async captureResponseCode(url) {
        this.page.on('response', response => {
            if (response.url() === url) {
                this.statusCode = response.status();
                console.log(this.statusCode)
            }
        });
    }

    // Verify the response code
    async assertTheResponseCode(expectedStatusCode) {
        await expect(this.statusCode).toBe(expectedStatusCode);
    }
}