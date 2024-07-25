import { Page } from '@playwright/test'
import { Assertions } from '../Asserssions/globalAsserssions'

export class Logout{
    private page: Page
    logout_button: any

    constructor(page){
        this.logout_button = page.getByRole('button', { name: 'LOGOUT' })
    }

    // Logout from the system
    async logout(){
        await Assertions.assertPresenceOfTheElement(this.logout_button)
        await this.logout_button.click()
    }
}
