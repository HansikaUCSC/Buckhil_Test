import { Page } from '@playwright/test'
export class HomePage{
    private page: Page
    search_textbox: any
    searchResult_dropdownOPtion: any

    constructor(page, productName){
        this.page = page
        this.search_textbox = page.getByLabel('Search products')
        this.searchResult_dropdownOPtion = page.getByText(productName)
    }
    // Search for a product
    async productSearch(productName){
        await this.search_textbox.fill(productName).press('Enter')
        await this.searchResult_dropdownOPtion.click()
    }
}