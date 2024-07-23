import { Page } from "@playwright/test"
export class cartPage{
    private page: Page
    proceedToCheckout_button: any

    constructor(page){
        this.page = page
        this.proceedToCheckout_button = page.getByRole('button', { name: 'Proceed to checkout' })
    }

    // Go to checkout
    async proceedToCheckout(){
        await this.proceedToCheckout_button.click()
    }
}