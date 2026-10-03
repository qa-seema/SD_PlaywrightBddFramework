import { expect } from "@playwright/test";

export class LeadPage {
    page: any;
    constructor(page: any) {
        this.page = page;
    }

    loc_mdl_leads: string = '//a[text()="Leads"]';
    loc_menu_newlead: string = '//a[text()="New Lead"]';
    loc_tb_firstname: string = '//input[@name="firstname"]';
    loc_tb_lastname: string = '//input[@name="lastname"]';
    loc_tb_company: string = '//input[@name="company"]';
    loc_btn_save: string = '//input[@title="Save [Alt+S]"]';
    loc_hdr_leadinfo: string = '//*[text()="Lead Information"]';
    loc_btn_edit: string = '//input[@title="Edit [Alt+E]"]';
    loc_tb_search_firstname: string = '//input[@name="firstname"]';
    loc_btn_search: string = '//input[@value="Search"]';
    loc_link_record: string = '//a[starts-with(@href,"index.php?action=DetailView&module=Leads&record")]';
    loc_tb_updated_record: string = '//td[text()="Last Name:"]/following::td[1]';
    loc_sel_record: string = 'input[name="selected_id"]';
    loc_btn_delete: string = '//input[@value="Delete"]';

    async clickLeadsModule() {
        await this.page.locator(this.loc_mdl_leads).nth(0).click();
    }

    async clickNewLeadMenu() {
        await this.page.locator(this.loc_menu_newlead).click();
    }
    async createNewLead(firstname: string, lastname: string, company: string) {
        await this.enterFirstName(firstname);
        await this.enterLastName(lastname);
        await this.enterCompany(company);
        await this.clickSaveButton();
        expect(await this.page.locator(this.loc_hdr_leadinfo)).toBeTruthy();
    }
    async enterFirstName(firstname: string) {
        await this.page.locator(this.loc_tb_firstname).fill(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator(this.loc_tb_lastname).fill(lastname);
    }

    async enterCompany(company: string) {
        await this.page.locator(this.loc_tb_company).fill(company);
    }
    async clickSaveButton() {
        await this.page.locator(this.loc_btn_save).nth(1).click();
    }

        async searchLead(firstname: string) {
        await this.page.locator(this.loc_tb_search_firstname).nth(1).fill(firstname);
        await this.clickSearchButton();
      

    }
           async searchLeadAndClickRecord(firstname: string) {
        await this.page.locator(this.loc_tb_search_firstname).nth(1).fill(firstname);
        await this.clickSearchButton();
        await this.clickSearchRecord();

    }
       async clickSearchButton() {
        await this.page.locator(this.loc_btn_search).nth(1).click();
    }
          async clickSearchRecord() {
        await this.page.locator(this.loc_link_record).click();
    }

      async clickEditButton() {
        await this.page.locator(this.loc_btn_edit).click();
    }

        async editLead(lastname: string) {
        await this.clickEditButton();
        await this.enterLastName(lastname);
        await this.clickSaveButton();
        expect(await this.page.locator(this.loc_hdr_leadinfo)).toBeTruthy();
    }

    async verifyUpdatedRecord(lastname: string){
       await expect (await this.page.locator(this.loc_tb_updated_record)).toHaveText(lastname);
    }

    async selectAndDeleteRecord(){
        await this.selectLeadRecord();
        await this.clickDeleteButton();

    }
     async selectLeadRecord(){
        await this.page.locator(this.loc_sel_record).check();
        
    }
    async clickDeleteButton(){
        await this.page.locator(this.loc_btn_delete).click();
        
    }

}