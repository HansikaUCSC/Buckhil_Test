import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/login'
import { Assertions } from '../Asserssions/globalAsserssions'
import { CustomersPage } from '../Pages/cusomers'
import { Logout } from '../Pages/logout'

// Definne variables
const baseUrl = process.env.BASE_URL
const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD
const dashboardHeaderElement = process.env.DASHBORD_HEADER_ELEMENT
const dashboardHeaderText = process.env.DASHBORD_HEADER_TEXT
const firstName = process.env.REG_USER_FNAME
const lasttName = process.env.REG_USER_LNAME
const email = process.env.REG_USER_EMAIL
const phoneNumber = process.env.REG_USER_PHONE_NUMBER
const location = process.env.REG_USER_LOCATION
const password = process.env.REG_USER_PASSWORD

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

test('Create a new customer', async ({ page }) => {
  const customer = new CustomersPage(page)
  const assertionsValidation = new Assertions(page)

  // Navigate to the customer list
  await customer.navigateToCustomerList()

  // Enter customer data for registration
  await customer.navigateToCreateCustomerPopup()
  await customer.enterFirstName(firstName)
  await customer.enterLastName(lasttName)
  await customer.enterEmail(email)
  await customer.enterPhoneNumber(phoneNumber)
  await customer.enterLocation(location)
  await customer.enterPassword(password)
  await customer.enterConfirmPassword(password)

  // Confirm the registration
  await customer.addNewCustomer_popupButton.click()
})

test.afterEach(async ({ page }) => {
  await page.close()
})