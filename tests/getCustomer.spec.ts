import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { HomePage } from '../Pages/home'
import { CustomersPage } from '../Pages/cusomers'

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    const assertionsValidation = new Assertions(page)

    // Login to the system as admin
    await login.navigateToURL('https://pet-shop.buckhill.com.hr/login')
    await login.enterEmial('admin@buckhill.co.uk')
    await login.enterPassword('admin')
    await login.clickLoginButton()

    // Verify the page header
    await assertionsValidation.assertThePageHeader('p.text-h5 >> text=Dashboard', 'Dashboard')
})

test('Get customer email for customer login', async ({ page }) => {
    const customer = new CustomersPage(page)
    const assertionsValidation = new Assertions(page)
    await customer.navigateToCustomerList()
    // Verify the page header
    await assertionsValidation.assertThePageHeader('p.text-h5 >> text=Customers', 'Customers')
    await customer.getUseremail()
})

test.afterEach(async ({ page }) => {
    await page.close()
})