import { Page } from "@playwright/test"
import { Assertions } from "../Asserssions/globalAsserssions"
export class cartPage{
    private page: Page
    proceedToCheckout_button: any

    constructor(page){
        this.page = page
        this.proceedToCheckout_button = page.getByRole('button', { name: 'Proceed to checkout' })
    }

    // Go to checkout
    async proceedToCheckout(){
        await Assertions.assertPresenceOfTheElement(this.proceedToCheckout_button)
        await this.proceedToCheckout_button.click()
    }
}