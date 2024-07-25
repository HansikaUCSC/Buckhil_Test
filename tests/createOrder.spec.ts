import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { HomePage } from '../Pages/home'
import { ProductDetailPage } from '../Pages/productDetails'
import { cartPage } from '../Pages/cart'
import { CheckoutPage } from '../Pages/checkout'
import { readUserEmail } from '../Utils/dataUtils'
import { CustomersPage } from '../Pages/customers'
import { Logout } from '../Pages/logout'

// Definne variables
const productName = process.env.PRODUCT_NAME
const baseUrl = process.env.BASE_URL
const userPassword = process.env.USER_PASSWORD
const productQuantity = process.env.PRODUCT_QUANTITY
const shippingAdrFirstName = process.env.SHIPPING_ADR_FNAME
const shippingAdrLastName = process.env.SHIPPING_ADR_LNAME
const shippingAdrLine1 = process.env.SHIPPING_ADR_LINE1
const shippingAdrLine2 = process.env.SHIPPING_ADR_LINE2
const shippingAdrCity = process.env.SHIPPING_ADR_CITY
const shippingAdrState = process.env.SHIPPING_ADR_STATE
const shippingAdrZipCode = process.env.SHIPPING_ADR_ZIP_CODE
const shippingAdrCountry = process.env.SHIPPING_ADR_COUNTRY
const cashOnDelAdrFirstName = process.env.COD_ADR_FNAME
const cashOnDelAdrLastName = process.env.COD_ADR_LNAME
const cashOnDelAdrLine1 = process.env.COD_ADR_LINE1
const cashOnDelAdrLine2 = process.env.COD_ADR_LINE2

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)

    // Read the user email from the file
    const userEmail = await readUserEmail();

    // Login to the system as user
    await login.navigateToURL(baseUrl)
    await login.naviagateToLoginPopup()
    await login.enterEmail(userEmail)
    await login.enterPassword(userPassword)
    await login.clickLoginButton()
})

test('Place an order', async ({ page }) => {

    const home = new HomePage(page, productName)
    const productDetails = new ProductDetailPage(page)
    const cart = new cartPage(page)
    const checkout = new CheckoutPage(page)

    // Add products to cart & proceed to checkout
    await home.productSearch(productName)
    await productDetails.addToCart(productQuantity)
    await productDetails.navigateToCart()
    await cart.proceedToCheckout()

    // Enter shipping address related information
    await checkout.enterFirstNameForShippingAddress(shippingAdrFirstName)
    await checkout.enterLastNameForShippingAddress(shippingAdrLastName)
    await checkout.enterAdLine1ForShippingAddress(shippingAdrLine1)
    await checkout.enterAdLine2ForShippingAddress(shippingAdrLine2)
    await checkout.enterCityForShippingAddress(shippingAdrCity)
    await checkout.enterStateForShippingAddress(shippingAdrState)
    await checkout.enterZipCodeForShippingAddress(shippingAdrZipCode)
    await checkout.enterCountryForShippingAddress(shippingAdrCountry)
    await checkout.clickUsesameAdCheckbox()
    await checkout.clickNextButton()

    // Enter cash on delivery related information
    await checkout.selectPaymentMethod()
    await checkout.enterFirstNameForCODAddress(cashOnDelAdrFirstName)
    await checkout.enterLastNameForCODAddress(cashOnDelAdrLastName)
    await checkout.enterAdLine1ForCODAddress(cashOnDelAdrLine1)
    await checkout.enterAdLine2ForCODAddress(cashOnDelAdrLine2)
    await checkout.clickTermConditionCheckbox()
    await checkout.clickNextButton()
    await page.pause()

    // Confirm placing order
    await checkout.clickPlaceOrderButton()
})

test.afterEach(async ({ page }) => {
    const logout = new Logout(page)

    await logout.logout()
    await page.close()
})