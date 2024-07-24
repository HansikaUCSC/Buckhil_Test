import { Page } from '@playwright/test'
export class ProductDetailPage{
    private page: Page
    addToCart_button: any
    itemQuantity: any
    cart_button: any

    constructor(page){
        this.page = page
        this.itemQuantity = page.locator('[id = "input-38"]')
        this.addToCart_button = page.getByRole('button', { name: 'add to cart' })
        this.cart_button = page.locator('button:has-text("CART")').nth(0)
    }

    // Add procuct to cart
    async addToCart(quantity){
        await this.itemQuantity.press('ControlOrMeta+a')
        await this.itemQuantity.fill(quantity)
        await this.addToCart_button.click()
    }

    // Navigate to cart
    async navigateToCart(){
        await this.cart_button.click()
    }
}