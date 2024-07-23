import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { HomePage } from '../Pages/home'
import { ProductDetailPage } from '../Pages/productDetails'
import { cartPage } from '../Pages/cart'
import { CheckoutPage } from '../Pages/checkout'

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    const assertionsValidation = new Assertions(page)

    // Login to the system as user
    await login.navigateToURL('https://pet-shop.buckhill.com.hr')
    await login.naviagateToLoginPopup()
    await login.enterEmial('')
    await login.enterPassword('userpassword')
    await login.clickLoginButton()

    // Verify the page header
    await assertionsValidation.assertThePageHeader('p.text-h5 >> text=Dashboard', 'Dashboard')
})

test('Place an order', async({page})=>{
    const productName = 'Advantage II Flea Treatment and Prevention for Small Cats'
    const home = new HomePage(page,productName)
    const productDetails = new ProductDetailPage(page)
    const cart = new cartPage(page)
    const checkout = new CheckoutPage(page)

    // Add products to cart & proceed to checkout
    await home.productSearch(productName)
    await productDetails.addToCart('1')
    await productDetails.navigateToCart()
    await cart.proceedToCheckout()

    // Enter shipping address related information
    await checkout.enterFirstNameForShippingAddress('Gregory')
    await checkout.enterLastNameForShippingAddress('Fay')
    await checkout.enterAdLine1ForShippingAddress('1479')
    await checkout.enterAdLine2ForShippingAddress('amison Crossing Suite')
    await checkout.enterCityForShippingAddress('West Greg')
    await checkout.enterStateForShippingAddress('Southwestern Ontario')
    await checkout.enterZipCodeForShippingAddress('1234')
    await checkout.enterCountryForShippingAddress('Canada')
    await checkout.clickUsesameAdCheckbox()
    await checkout.clickNextButton()

    // Enter cash on delivery related information
    await checkout.selectPaymentMethod()
    await checkout.codAd_FirstName_textbox('Gregory')
    await checkout.codAd_LasttName_textbox('Fay')
    await checkout.codAd_AdLine1_textbox('1479')
    await checkout.codAd_AdLine2_textbox('amison Crossing Suite')
    await checkout.clickNextButton()

    // Confirm placing order
    await checkout.clickTermConditionCheckbox()
    await checkout.clickPlaceOrderButton()
})

test.afterEach(async ({ page }) => {
    await page.close()
})