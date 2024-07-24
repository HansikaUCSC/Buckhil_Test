import { Page } from '@playwright/test'
export class HomePage{
    private page: Page
    search_textbox: any
    searchResult_dropdownOPtion: any
    logout_button: any

    constructor(page, productName){
        this.page = page
        this.search_textbox = page.getByLabel('Search products')
        this.searchResult_dropdownOPtion = page.getByText(productName)
        this.logout_button = page.getByRole('button', { name: 'LOGOUT' })
    }
    // Search for a product
    async productSearch(productName){
        await this.search_textbox.fill(productName)
        await this.search_textbox.press('Enter')
        await this.searchResult_dropdownOPtion.click()
    }

    // Logout from the system
    async logout(){
        await this.logout_button.click()
    }
}