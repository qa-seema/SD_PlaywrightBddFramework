// fixtures/base.fixture.ts
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { LeadPage } from '../pages/leadpage';
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  leadPage: LeadPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
    leadPage: async ({ page }, use) => {
    const leadPage = new LeadPage(page);
    await use(leadPage);
  },
});
export { expect } from '@playwright/test';
