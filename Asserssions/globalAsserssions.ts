import { expect, Page } from '@playwright/test';
export class Assertions{
    page: any;
    constructor(page){
        this.page = page
    }
    //Verify  the page header
    async assertThePageHeader(headerElement,headerText){
        await expect(this.page.locator(headerElement)).toHaveText(headerText)
    }
}