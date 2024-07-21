import { test, expect } from '@playwright/test';
import{LoginPage} from '../Pages/login'
import{Assertions} from '../Asserssions/globalAsserssions'

test('Admin Login', async ({ page }) => {
  const Login = new LoginPage(page)
  const AssertionsValidation = new Assertions(page)

  await Login.navigateToURL('https://pet-shop.buckhill.com.hr/login')
  await Login.enterEmail('admin@buckhill.co.uk')
  await Login.enterPassword('admin')
  await Login.clickOnLogin()
  await AssertionsValidation.assertThePageHeader('p.text-h5 >> text=Dashboard','Dashboard')
});