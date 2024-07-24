import { Page } from '@playwright/test'
import { saveUserEmail } from '../Utils/dataUtils'

export class CustomersPage {
    private page: Page
    customerNavigation_menuOption: any
    customerEmail_lable: any

    constructor(page) {
        this.page = page
        this.customerNavigation_menuOption = page.getByRole('link', { name: 'Customers' })
        this.customerEmail_lable = page.locator('//tr[@data-v-90b5599e][5]/td[2]')
    }

    // Navigate to customer list page
    async navigateToCustomerList() {
        await this.customerNavigation_menuOption.click()
    }

    // get a user email
    async getUseremail() {
        // Extract one user email from the customers list
        const userEmail = await this.customerEmail_lable.first().innerText();
        console.log(`User email: ${userEmail}`);

        // Save the user email to a file
        await saveUserEmail(userEmail);  
    }
}