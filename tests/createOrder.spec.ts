import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'

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

test.afterEach(async ({ page }) => {
    await page.close()
})