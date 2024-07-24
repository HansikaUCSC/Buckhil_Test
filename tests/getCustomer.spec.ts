import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { CustomersPage } from '../Pages/cusomers'

// Definne variables
const baseUrl = process.env.BASE_URL
const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD
const dashboardHeaderElement = process.env.DASHBORD_HEADER_ELEMENT
const dashboardHeaderText = process.env.DASHBORD_HEADER_TEXT
const customersHeaderElement = process.env.CUSTOMERS_HEADER_ELEMENT
const customersdHeaderText = process.env.CUSTOMERS_HEADER_TEXT

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    const assertionsValidation = new Assertions(page)

    // Login to the system as admin
    await login.navigateToURL(baseUrl + '/login')
    await login.enterEmial(adminEmail)
    await login.enterPassword(adminPassword)
    await login.clickLoginButton()

    // Verify the page header
    await assertionsValidation.assertThePageHeader(dashboardHeaderElement, dashboardHeaderText)
})

test('Get customer email for customer login', async ({ page }) => {
    const customer = new CustomersPage(page)
    const assertionsValidation = new Assertions(page)
    await customer.navigateToCustomerList()
    // Verify the page header
    await assertionsValidation.assertThePageHeader(customersHeaderElement, customersdHeaderText)
    await customer.getUseremail()
})

test.afterEach(async ({ page }) => {
    await page.close()
})