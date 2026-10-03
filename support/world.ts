import {
    World,
    IWorldOptions,
    setWorldConstructor
} from '@cucumber/cucumber';

import {
    Browser,
    BrowserContext,
    Page
} from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { LeadPage } from '../pages/leadpage';


export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    lp!: LoginPage;
    hp!: HomePage;
    ldp!: LeadPage;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
