
export class HomePage {
    page: any;
    constructor(page: any) {
        this.page = page;
    }

    loc_link_logout: string = '//a[text()="Logout"]';
    loc_tb_home: string = '//a[text()="Home"]';

    async verifyLogoutLink() {
        return await this.page.locator(this.loc_link_logout).isVisible();
    }

     async verifyHomePage() {
        return await this.page.locator(this.loc_tb_home).isVisible();
    }

    async clickLogoutLink() {
        await this.page.locator(this.loc_link_logout).click();
    }


}