import { Page } from '@playwright/test';
export class LoginPage{
    page: any
    email_textbox: any
    password_textbox: any
    login_button: any
    constructor(page){
        this.page = page
        this.email_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }
    //Navigate to the login page
    async navigateToURL(url){
        await this.page.goto(url)
    }
    //Enter value for the email filed
    async enterEmail(email){
        await this.email_textbox.fill(email)
        
    }
    //Enter value for the password filed
    async enterPassword(password){
        await this.password_textbox.fill(password)
    }
    //Click on the login button
    async clickOnLogin(){
        await this.login_button.click()
    }
}
