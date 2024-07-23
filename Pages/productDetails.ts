import { Page } from '@playwright/test'
export class ProductDetailPage{
    private page: Page
    addToCart_button: any
    itemQuantity: any
    cart_button: any

    constructor(page){
        this.page = page
        this.itemQuantity = page.locator('id = input-28')
        this.addToCart_button = page.getByRole('button', { name: 'add to cart' })
        this.cart_button = page.locator('input:has-text("Cart")')
    }

    // Add procuct to cart
    async addToCart(quantity){
        await this.itemQuantity.press('ControlOrMeta+a').fill(quantity)
        await this.addToCart_button.click
    }

    // Navigate to cart
    async navigateToCart(){
        await this.cart_button.click()
    }
}