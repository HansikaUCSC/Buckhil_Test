import { Page } from '@playwright/test'
import { Assertions } from '../Asserssions/globalAsserssions'
export class LoginPage{
    private page: Page
    email_textbox: any
    password_textbox: any
    login_button: any
    login_gridButton: any

    constructor(page){
        this.page = page
        this.login_gridButton = page.getByRole('button', { name: 'LOGIN' })
        this.email_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }
    // Navigate to the system
    async navigateToURL(url){
        await this.page.goto(url)
    }

    // Navigate to login popup
    async naviagateToLoginPopup(){
        await Assertions.assertPresenceOfTheElement(this.login_gridButton)
        await this.login_gridButton.click()
    }

    // Enter email
    async enterEmail(email){
        await Assertions.assertPresenceOfTheElement(this.email_textbox)
        await this.email_textbox.fill(email)
    }

    // Enter password
    async enterPassword(password){
        await Assertions.assertPresenceOfTheElement(this.password_textbox)
        await this.password_textbox.fill(password)
    }

    //clik on the Login button
    async clickLoginButton(){
        await Assertions.assertPresenceOfTheElement(this.login_button)
        await this.login_button.click()
    }
}
