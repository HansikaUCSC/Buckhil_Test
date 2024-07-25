import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { HomePage } from '../Pages/home'
import { ProductDetailPage } from '../Pages/productDetails'
import { cartPage } from '../Pages/cart'
import { CheckoutPage } from '../Pages/checkout'
import { readUserEmail } from '../Utils/dataUtils'
import { CustomersPage } from '../Pages/cusomers'
import { Logout } from '../Pages/logout'

// Definne variables
const productName = process.env.PRODUCT_NAME
const baseUrl = process.env.BASE_URL
const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD
const userPassword = process.env.USER_PASSWORD
const dashboardHeaderElement = process.env.DASHBORD_HEADER_ELEMENT
const dashboardHeaderText = process.env.DASHBORD_HEADER_TEXT
const customersHeaderElement = process.env.CUSTOMERS_HEADER_ELEMENT
const customersdHeaderText = process.env.CUSTOMERS_HEADER_TEXT
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
    const assertionsValidation = new Assertions(page)
    const customer = new CustomersPage(page)
    const logout = new Logout(page)

    // Login to the system as admin
    await login.navigateToURL(baseUrl + '/login')
    await login.enterEmial(adminEmail)
    await login.enterPassword(adminPassword)
    await login.clickLoginButton()

    // Verify the page header
    await assertionsValidation.assertThePageHeader(dashboardHeaderElement,dashboardHeaderText)
    
    // Navigate to customer list page
    await customer.navigateToCustomerList()
    // Verify the page header
    await assertionsValidation.assertThePageHeader(customersHeaderElement, customersdHeaderText)
    await customer.getUseremail()
    // Logout as admin
    await logout.logout()
})

test('Place an order', async ({ page }) => {

    const home = new HomePage(page, productName)
    const productDetails = new ProductDetailPage(page)
    const cart = new cartPage(page)
    const checkout = new CheckoutPage(page)
    const login = new LoginPage(page)

    // Read the user email from the file
    const userEmail = await readUserEmail();

    // Login to the system as user
    await login.navigateToURL(baseUrl)
    await login.naviagateToLoginPopup()
    await login.enterEmial(userEmail)
    await login.enterPassword(userPassword)
    await login.clickLoginButton()

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
    await page.pause()

    // Enter cash on delivery related information
    await checkout.selectPaymentMethod()
    await checkout.enterFirstNameForCODAddress(cashOnDelAdrFirstName)
    await checkout.enterLastNameForCODAddress(cashOnDelAdrLastName)
    await checkout.enterAdLine1ForCODAddress(cashOnDelAdrLine1)
    await checkout.enterAdLine2ForCODAddress(cashOnDelAdrLine2)
    await checkout.clickTermConditionCheckbox()
    await checkout.clickNextButton()

    // Confirm placing order
    await checkout.clickPlaceOrderButton()
})

test.afterEach(async ({ page }) => {
    const logout = new Logout(page)

    await logout.logout()
    await page.close()
})