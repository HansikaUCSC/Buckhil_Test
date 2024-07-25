import { expect, Page } from '@playwright/test'
import { saveUserEmail } from '../Utils/dataUtils'
import { Assertions } from '../Asserssions/globalAsserssions'

export class CustomersPage {
    private page: Page
    customerNavigation_menuOption: any
    customerEmail_lable: any
    addNewCustomer_button: any
    firstName_textbox: any
    lastName_textbox: any
    email_textbox: any
    phoneNumber_textbox: any
    location_textbox: any
    password_textbox: any
    confirmPassword_textbox: any
    addNewCustomer_popupButton: any
    filter_Arorow: any
    filter_customerEmail_textbox: any

    
    
    constructor(page) {
        this.page = page
        this.customerNavigation_menuOption = page.getByRole('link', { name: 'Customers' })
        this.filter_Arorow = page.getByTestId('filters-control').locator('i')
        this.filter_customerEmail_textbox = page.getByLabel('Customer Email')
        this.customerEmail_lable = page.locator('//tr[@data-v-90b5599e][2]/td[2]')
        this.addNewCustomer_button = page.getByRole('button', { name: 'add new customer' })
        this.firstName_textbox = page.getByLabel('First Name')
        this.lastName_textbox = page.getByLabel('Last Name')
        this.email_textbox = page.getByLabel('Email', { exact: true })
        this.phoneNumber_textbox = page.getByLabel('Phone Number')
        this.location_textbox = page.getByLabel('Location')
        this.password_textbox = page.getByLabel('Password', { exact: true })
        this.confirmPassword_textbox = page.getByLabel('Confirm Password')
        this.addNewCustomer_popupButton = page.getByRole('button', { name: 'Add new customer', exact: true })
    }

    // Navigate to customer list page
    async navigateToCustomerList() {
        await Assertions.assertPresenceOfTheElement(this.customerNavigation_menuOption)
        await this.customerNavigation_menuOption.click()
    }
    // Filter the customer list
    async filterCustomers(filterKeyword){
        await Assertions.assertPresenceOfTheElement(this.filter_Arorow)
        await this.filter_Arorow.click()
        await Assertions.assertPresenceOfTheElement(this.filter_customerEmail_textbox)
        await this.filter_customerEmail_textbox.fill(filterKeyword)
        await this.filter_customerEmail_textbox.press('Enter')
        await Assertions.assertPresenceOfTheElement(this.filter_Arorow)
        await this.filter_Arorow.click()
    }

    // get a user email
    async getUseremail() {
        // Extract one user email from the customers list
        const userEmail = await this.customerEmail_lable.first().innerText();
        console.log(`User email: ${userEmail}`);

        // Save the user email to a file
        await saveUserEmail(userEmail);  
    }

    /* --------Create a user------------*/
    // Navigate to add customer popup
    async navigateToCreateCustomerPopup() {
        await Assertions.assertPresenceOfTheElement(this.addNewCustomer_button)
        await this.addNewCustomer_button.click()
    }
    // Enter first name
    async enterFirstName(firstName) {
        await Assertions.assertPresenceOfTheElement(this.firstName_textbox)
        await this.firstName_textbox.fill(firstName)
    }
    // Enter last name
    async enterLastName(lasttName) {
        await Assertions.assertPresenceOfTheElement(this.lastName_textbox)
        await this.lastName_textbox.fill(lasttName)
    }
    // Enter email
    async enterEmail(email) {
        await Assertions.assertPresenceOfTheElement(this.email_textbox)
        await this.email_textbox.fill(email)
    }
    // Enter phone number
    async enterPhoneNumber(phoneNumber) {
        await Assertions.assertPresenceOfTheElement(this.phoneNumber_textbox)
        await this.phoneNumber_textbox.fill(phoneNumber)
    }
    // Enter location
    async enterLocation(location) {
        await Assertions.assertPresenceOfTheElement(this.location_textbox)
        await this.location_textbox.fill(location)
    }
    // Enter password
    async enterPassword(password) {
        await Assertions.assertPresenceOfTheElement(this.password_textbox)
        await this.password_textbox.fill(password)
    }
    // Enter confirm password
    async enterConfirmPassword(password) {
        await Assertions.assertPresenceOfTheElement(this.confirmPassword_textbox)
        await this.confirmPassword_textbox.fill(password)
    }
    // Click add Customer popup buton
    async clickAddCustomerButton() {
        await Assertions.assertPresenceOfTheElement(this.addNewCustomer_popupButton)
        await this.addNewCustomer_popupButton.click()
    }
}