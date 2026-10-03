import{Given, When, Then} from '@cucumber/cucumber'
import { CustomWorld } from '../support/world';
import { expect } from 'playwright/test';

Given('user should be on login page', async function (this: CustomWorld) {
// const browser = chromium.launch();
// const context = await this.browser.newContext();
// page = await this.context.newPage();
await this.page.goto("http://localhost:100");


});

When('user enters the valid credential', async function (this: CustomWorld) {
await this.lp.login("admin","admin");
});

Then('user should be navigated to the home page', async function  (this: CustomWorld) {
 expect( await this.hp.verifyHomePage()).toBeTruthy();
});

Then('user can see the logout link', async function  (this: CustomWorld) {
 expect(await this.hp.verifyLogoutLink()).toBeTruthy();
});

// Then('close the browser', async function  (this: CustomWorld) {
// await this.page.close();
// });

When('user enters the invalid credential', async function  (this: CustomWorld) {
await this.lp.login("admin", "admin123");
});

Then('user should be navigated to the login page', async function () {
 expect(await this.lp.verifyUsername()).toBeTruthy();
});

Then('user can see the error message', async function  (this: CustomWorld) {
 expect( await this.lp.verifyErrorMessage()).toBeTruthy();
});

When('user enters the user id as {string} and password as {string} invalid credential', async function (uid, pwd) {
await this.lp.login(uid,pwd);
});

