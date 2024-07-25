import { Page } from '@playwright/test'
import { Assertions } from '../Asserssions/globalAsserssions'
export class ProductDetailPage{
    private page: Page
    addToCart_button: any
    itemQuantity: any
    cart_button: any

    constructor(page){
        this.page = page
        this.itemQuantity = page.getByLabel('', { exact: true })
        this.addToCart_button = page.getByRole('button', { name: 'add to cart' })
        this.cart_button = page.locator('button:has-text("CART")').nth(0)
    }

    // Add procuct to cart
    async addToCart(quantity){
        await Assertions.assertPresenceOfTheElement(this.itemQuantity)
        await this.itemQuantity.press('ControlOrMeta+a')
        await this.itemQuantity.fill(quantity)
        await Assertions.assertPresenceOfTheElement(this.addToCart_button)
        await this.addToCart_button.click()
    }

    // Navigate to cart
    async navigateToCart(){
        await Assertions.assertPresenceOfTheElement(this.cart_button)
        await this.cart_button.click()
    }
}