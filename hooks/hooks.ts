import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from '../support/world';

import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { LeadPage } from '../pages/leadpage';


Before(async function (this: CustomWorld) {

    console.log('>>> Before hook started');

    this.browser = await chromium.launch({
        headless: true
    });

    console.log('>>> Browser created');

    this.context = await this.browser.newContext();

    console.log('>>> Browser context created');

    this.page = await this.context.newPage();

    console.log('>>> Page created');

    // Initialize Page Objects
    this.lp = new LoginPage(this.page);
    this.hp = new HomePage(this.page);
    this.ldp = new LeadPage(this.page);

    console.log('>>> Page objects created');
});


After(async function (this: CustomWorld) {

    console.log('>>> After hook started');

    if (this.page && !this.page.isClosed()) {
        await this.page.close();
    }

    if (this.context) {
        await this.context.close();
    }

    if (this.browser) {
        await this.browser.close();
    }

    console.log('>>> Browser closed');
});
