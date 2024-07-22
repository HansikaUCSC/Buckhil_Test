import { test, expect } from '@playwright/test';
import{LoginPage} from '../Pages/login'
import{Assertions} from '../Asserssions/globalAsserssions'
import { RegisterUser } from '../Pages/userRegistration';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page)
  const assertionsValidation = new Assertions(page)

  // Login to the system as admin
  await login.loginToSystems('https://pet-shop.buckhill.com.hr/login','admin@buckhill.co.uk','admin')
  
  // Verify the page header
  await assertionsValidation.assertThePageHeader('p.text-h5 >> text=Dashboard','Dashboard')
})

test('Create a new customer',async({page})=>{
  const userRegistration = new RegisterUser(page)
  const assertionsValidation = new Assertions(page)

  // Capture the response code for the navigation request
  await assertionsValidation.captureResponseCode('https://pet-shop.buckhill.com.hr/api/v1/admin/user-listing?page=1&limit=5');

  // Navigate to the customer list
  await userRegistration.navigateToCustomerList();

  // Wait for the network response to be captured
  await page.waitForLoadState('networkidle');

  // Verify the status code
  await assertionsValidation.assertTheResponseCode(200);

  // Enter customer data for registration
  await userRegistration.navigateToCreateCustomerPopup()
  await userRegistration.enterFirstName('John')
  await userRegistration.enterLastName('Doe')
  await userRegistration.enterEmail('john.doe@example.com')
  await userRegistration.enterPhoneNumber('1234567890')
  await userRegistration.enterLocation('New York')
  await userRegistration.enterPassword('userpassword')
  await userRegistration.enterConfirmPassword('userpassword')

  // Confirm the registration
  await userRegistration.addNewCustomer_popupButton.click()
})

test.afterEach(async ({ page }) => {
  await page.close()
})