import { Page } from '@playwright/test';
export class LoginPage{
    private page: Page;
    email_textbox: any
    password_textbox: any
    login_button: any
    constructor(page){
        this.page = page
        this.email_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }
    // Login to the site
    async loginToSystems(url,email,password){
        await this.page.goto(url)
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
}
