import { Page } from "@playwright/test";
export class CheckoutPage{
    private page: Page
    spAd_FirstName_textbox: any;
    spAd_LasttName_textbox: any;
    spAd_AdLine1_textbox: any;
    spAd_AdLine2_textbox: any;
    spAd_City_textbox: any;
    spAd_State_textbox: any;
    spAd_ZipCode_textbox: any;
    spAd_Country_textbox: any;
    useSameAddress_checkbox: any;
    next_button: any;
    cod_button: any
    codAd_FirstName_textbox: any;
    codAd_LasttName_textbox: any;
    codAd_AdLine1_textbox: any;
    codAd_AdLine2_textbox: any;
    termConditions_checkbox: any;
    placeOrder_button: any;

    constructor(page){
        this.page = page
        this.spAd_FirstName_textbox = page.locator('id = input-32')
        this.spAd_LasttName_textbox = page.locator('id = input-34')
        this.spAd_AdLine1_textbox = page.locator('id = input-36')
        this.spAd_AdLine2_textbox = page.locator('id = input-38')
        this.spAd_City_textbox = page.locator('id = input-40')
        this.spAd_State_textbox = page.locator('id = input-42')
        this.spAd_ZipCode_textbox = page.locator('id = input-44')
        this.spAd_Country_textbox = page.locator('id = input-46')
        this.useSameAddress_checkbox = page.locator('id = checkbox-48')
        this.cod_button = page.locator('div').filter({ hasText: 'Cash on delivery' }).nth(1)
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.codAd_FirstName_textbox = page.locator('id = input-78')
        this.codAd_LasttName_textbox = page.locator('id = input-80')
        this.codAd_AdLine1_textbox = page.locator('id = input-82')
        this.codAd_AdLine2_textbox = page.locator('id = input-84')
        this.termConditions_checkbox = page.locator('id = checkbox-86')
        this.placeOrder_button = page.getByRole('button', { name: 'Place order' })
    }

    // Enter first name for shipping address
    async enterFirstNameForShippingAddress(firstName){
        await this.spAd_FirstName_textbox.fill(firstName)
    }

    // Enter last name for shipping address
    async enterLastNameForShippingAddress(lastName){
        await this.spAd_LasttName_textbox.fill(lastName)
    }

    // Enter address line1 for shipping address
    async enterAdLine1ForShippingAddress(AddressLine1){
        await this.spAd_AdLine1_textbox.fill(AddressLine1)
    }

    // Enter address line2 for shipping address
    async enterAdLine2ForShippingAddress(AddressLine2){
        await this.spAd_AdLine2_textbox.fill(AddressLine2)
    }

    // Enter city for shipping address
    async enterCityForShippingAddress(city){
        await this.spAd_City_textbox.fill(city)
    }

    // Enter state for shipping address
    async enterStateForShippingAddress(state){
        await this.spAd_State_textbox.fill(state)
    }

    // Enter zip code for shipping address
    async enterZipCodeForShippingAddress(zipCode){
        await this.spAd_ZipCode_textbox.fill(zipCode)
    }

    // Enter country for shipping address
    async enterCountryForShippingAddress(country){
        await this.spAd_Country_textbox.fill(country)
    }

    // Click 'use same adderess for payement address' checkbox
    async clickUsesameAdCheckbox(){
        await this.useSameAddress_checkbox.click()
    }

    //Navigate to next step
    async clickNextButton(){
        await this.next_button.click()
    }

    //Select cash on delivery as payment method
    async selectPaymentMethod(){
        await this.cod_button.click()
    }

    // Enter first name for cash on delivery address
    async enterFirstNameForCODAddress(firstName){
        await this.codAd_FirstName_textbox.fill(firstName)
    }

    // Enter last name for cash on delivery address
    async enterLastNameForCODAddress(lastName){
        await this.codAd_LasttName_textbox.fill(lastName)
    }

    // Enter address line1 for cash on delivery address
    async enterAdLine1ForCODAddress(AddressLine1){
        await this.codAd_AdLine1_textbox.fill(AddressLine1)
    }

    // Enter address line2 for cash on delivery address
    async enterAdLine2ForCODAddress(AddressLine2){
        await this.codAd_AdLine2_textbox.fill(AddressLine2)
    }

    // Click 'I consent to your T&Cs' checkbox
    async clickTermConditionCheckbox(){
        await this.termConditions_checkbox.click()
    }

    // Click place order button
    async clickPlaceOrderButton(){
        await this.placeOrder_button.click()
    } 
}