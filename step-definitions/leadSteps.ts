import{Given, When, Then} from '@cucumber/cucumber'
import { CustomWorld } from '../support/world';
import { expect } from 'playwright/test';

When('user enter the lastname as {string} and company as {string} and click on save button', async function (string, string1, dataTable) {

    const data = dataTable.hashes();
    for ( const row of data ){
        const lname = row.lastname;
        const comp = row.company;
    
    await this.ldp.clickNewLeadMenu();
    await this.ldp.enterLastName(lname);
    await this.ldp.enterCompany(comp);
    await this.ldp.clickSaveButton();
}
});