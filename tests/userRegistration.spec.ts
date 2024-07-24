import { test, expect } from '@playwright/test'
import{LoginPage} from '../Pages/login'
import{Assertions} from '../Asserssions/globalAsserssions'
import { RegisterUser } from '../Pages/userRegistration'

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
  await login.navigateToURL(baseUrl+'/login')
  await login.enterEmial(adminEmail)
  await login.enterPassword(adminPassword)
  await login.clickLoginButton()
  
  // Verify the page header
  await assertionsValidation.assertThePageHeader(dashboardHeaderElement,dashboardHeaderText)
})

test('Create a new customer',async({page})=>{
  const userRegistration = new RegisterUser(page)
  const assertionsValidation = new Assertions(page)

  // Capture the response code for the navigation request
  await assertionsValidation.captureResponseCode(baseUrl+'/api/v1/admin/user-listing?page=1&limit=5');

  // Navigate to the customer list
  await userRegistration.navigateToCustomerList()

  // Wait for the network response to be captured
  await page.waitForLoadState('networkidle')

  // Verify the status code
  await assertionsValidation.assertTheResponseCode(200);

  // Enter customer data for registration
  await userRegistration.navigateToCreateCustomerPopup()
  await userRegistration.enterFirstName(firstName)
  await userRegistration.enterLastName(lasttName)
  await userRegistration.enterEmail(email)
  await userRegistration.enterPhoneNumber(phoneNumber)
  await userRegistration.enterLocation(location)
  await userRegistration.enterPassword(password)
  await userRegistration.enterConfirmPassword(password)

  // Confirm the registration
  await userRegistration.addNewCustomer_popupButton.click()
})

test.afterEach(async ({ page }) => {
  await page.close()
})