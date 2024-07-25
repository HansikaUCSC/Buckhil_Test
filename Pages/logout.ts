import { Page } from '@playwright/test'

export class Logout{
    private page: Page
    logout_button: any

    constructor(page){
        this.logout_button = page.getByRole('button', { name: 'LOGOUT' })
    }

    // Logout from the system
    async logout(){
        await this.logout_button.click()
    }
}
