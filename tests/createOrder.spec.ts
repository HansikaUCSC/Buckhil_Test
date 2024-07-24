import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { HomePage } from '../Pages/home'
import { ProductDetailPage } from '../Pages/productDetails'
import { cartPage } from '../Pages/cart'
import { CheckoutPage } from '../Pages/checkout'
import { readUserEmail } from '../Utils/dataUtils'
import { CustomersPage } from '../Pages/cusomers'

const productName = 'Advantage II Flea Treatment and Prevention for Small Cats'

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    const assertionsValidation = new Assertions(page)
    const customer = new CustomersPage(page)
    const home = new HomePage(page, productName)

    // Login to the system as admin
    await login.navigateToURL('https://pet-shop.buckhill.com.hr/login')
    await login.enterEmial('admin@buckhill.co.uk')
    await login.enterPassword('admin')
    await login.clickLoginButton()

    // Navigate to customer list page
    await customer.navigateToCustomerList()
    // Verify the page header
    await assertionsValidation.assertThePageHeader('p.text-h5 >> text=Customers', 'Customers')
    await customer.getUseremail()
    // Logout as admin
    await home.logout()
})

test('Place an order', async ({ page }) => {
    
    const home = new HomePage(page, productName)
    const productDetails = new ProductDetailPage(page)
    const cart = new cartPage(page)
    const checkout = new CheckoutPage(page)
    const login = new LoginPage(page)
    const assertionsValidation = new Assertions(page)

    // Read the user email from the file
    const userEmail = await readUserEmail();

    // Login to the system as user
    await login.navigateToURL('https://pet-shop.buckhill.com.hr')
    await login.naviagateToLoginPopup()
    await login.enterEmial(userEmail)
    await login.enterPassword('userpassword')
    await login.clickLoginButton()

    // Add products to cart & proceed to checkout
    await home.productSearch(productName)
    await productDetails.addToCart('2')
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
    await page.pause()

    // Enter cash on delivery related information
    await checkout.selectPaymentMethod()
    await checkout.enterFirstNameForCODAddress('Gregory')
    await checkout.enterLastNameForCODAddress('Fay')
    await checkout.enterAdLine1ForCODAddress('1479')
    await checkout.enterAdLine2ForCODAddress('amison Crossing Suite')
    await checkout.clickTermConditionCheckbox()
    await checkout.clickNextButton()

    // Confirm placing order
    await checkout.clickPlaceOrderButton()
})

test.afterEach(async ({ page }) => {
    await page.close()
})