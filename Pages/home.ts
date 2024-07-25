import { Page } from '@playwright/test'
import { Assertions } from '../Asserssions/globalAsserssions'
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
        await Assertions.assertPresenceOfTheElement(this.search_textbox)
        await this.search_textbox.fill(productName)
        await this.search_textbox.press('Enter')
        await Assertions.assertPresenceOfTheElement(this.searchResult_dropdownOPtion)
        await this.searchResult_dropdownOPtion.click()
    }
}