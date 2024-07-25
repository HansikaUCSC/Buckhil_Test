import { Page } from "@playwright/test";
import { Assertions } from "../Asserssions/globalAsserssions";
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
        this.spAd_FirstName_textbox = page.getByLabel('First name *')
        this.spAd_LasttName_textbox = page.getByLabel('Last name *')
        this.spAd_AdLine1_textbox = page.getByLabel('Address line 1 *')
        this.spAd_AdLine2_textbox = page.getByLabel('Address line 2 *')
        this.spAd_City_textbox = page.getByLabel('City')
        this.spAd_State_textbox = page.getByLabel('State/Province/Region')
        this.spAd_ZipCode_textbox = page.getByLabel('Zip/Postal code *')
        this.spAd_Country_textbox = page.getByLabel('Country *')
        this.useSameAddress_checkbox = page.getByLabel('Use this address for payment')
        this.cod_button = page.locator('div:has-text("Cash on delivery")').nth(1)
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.codAd_FirstName_textbox = page.getByLabel('First name *')
        this.codAd_LasttName_textbox = page.getByLabel('Last name *')
        this.codAd_AdLine1_textbox = page.getByLabel('Address line 1 *')
        this.codAd_AdLine2_textbox = page.getByLabel('Address line 2 *')
        this.termConditions_checkbox = page.getByLabel('I consent to your T&Cs')
        this.placeOrder_button = page.getByRole('button', { name: 'Place order' })
    }

    // Enter first name for shipping address
    async enterFirstNameForShippingAddress(firstName){
        await Assertions.assertPresenceOfTheElement(this.spAd_FirstName_textbox)
        await this.spAd_FirstName_textbox.fill(firstName)
    }

    // Enter last name for shipping address
    async enterLastNameForShippingAddress(lastName){
        await Assertions.assertPresenceOfTheElement(this.spAd_LasttName_textbox)
        await this.spAd_LasttName_textbox.fill(lastName)
    }

    // Enter address line1 for shipping address
    async enterAdLine1ForShippingAddress(AddressLine1){
        await Assertions.assertPresenceOfTheElement(this.spAd_AdLine1_textbox)
        await this.spAd_AdLine1_textbox.fill(AddressLine1)
    }

    // Enter address line2 for shipping address
    async enterAdLine2ForShippingAddress(AddressLine2){
        await Assertions.assertPresenceOfTheElement(this.spAd_AdLine2_textbox)
        await this.spAd_AdLine2_textbox.fill(AddressLine2)
    }

    // Enter city for shipping address
    async enterCityForShippingAddress(city){
        await Assertions.assertPresenceOfTheElement(this.spAd_City_textbox)
        await this.spAd_City_textbox.fill(city)
    }

    // Enter state for shipping address
    async enterStateForShippingAddress(state){
        await Assertions.assertPresenceOfTheElement(this.spAd_State_textbox)
        await this.spAd_State_textbox.fill(state)
    }

    // Enter zip code for shipping address
    async enterZipCodeForShippingAddress(zipCode){
        await Assertions.assertPresenceOfTheElement(this.spAd_ZipCode_textbox)
        await this.spAd_ZipCode_textbox.fill(zipCode)
    }

    // Enter country for shipping address
    async enterCountryForShippingAddress(country){
        await Assertions.assertPresenceOfTheElement(this.spAd_Country_textbox)
        await this.spAd_Country_textbox.fill(country)
    }

    // Click 'use same adderess for payement address' checkbox
    async clickUsesameAdCheckbox(){
        await Assertions.assertPresenceOfTheElement(this.useSameAddress_checkbox)
        await this.useSameAddress_checkbox.click()
    }

    //Navigate to next step
    async clickNextButton(){
        await Assertions.assertPresenceOfTheElement(this.next_button)
        await this.next_button.click()
    }

    //Select cash on delivery as payment method
    async selectPaymentMethod(){
        await Assertions.assertPresenceOfTheElement(this.cod_button)
        await this.cod_button.click()
    }

    // Enter first name for cash on delivery address
    async enterFirstNameForCODAddress(firstName){
        await Assertions.assertPresenceOfTheElement(this.codAd_FirstName_textbox)
        await this.codAd_FirstName_textbox.fill(firstName)
    }

    // Enter last name for cash on delivery address
    async enterLastNameForCODAddress(lastName){
        await Assertions.assertPresenceOfTheElement(this.codAd_LasttName_textbox)
        await this.codAd_LasttName_textbox.fill(lastName)
    }

    // Enter address line1 for cash on delivery address
    async enterAdLine1ForCODAddress(AddressLine1){
        await Assertions.assertPresenceOfTheElement(this.codAd_AdLine1_textbox)
        await this.codAd_AdLine1_textbox.fill(AddressLine1)
    }

    // Enter address line2 for cash on delivery address
    async enterAdLine2ForCODAddress(AddressLine2){
        await Assertions.assertPresenceOfTheElement(this.codAd_AdLine2_textbox)
        await this.codAd_AdLine2_textbox.fill(AddressLine2)
    }

    // Click 'I consent to your T&Cs' checkbox
    async clickTermConditionCheckbox(){
        await Assertions.assertPresenceOfTheElement(this.termConditions_checkbox)
        await this.termConditions_checkbox.click()
    }

    // Click place order button
    async clickPlaceOrderButton(){
        await Assertions.assertPresenceOfTheElement(this.placeOrder_button)
        await this.placeOrder_button.click()
    } 
}