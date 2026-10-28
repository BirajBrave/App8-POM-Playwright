import { Page } from "@playwright/test";

export class LoginPage{
    private goLogin;
    readonly loginHeading;
    private fillEmail;
    private fillPassword;
    readonly checkRemember;
    private submitLogin;

    constructor(private page: Page){
        this.goLogin = this.page.getByTestId("pw-header-login");
        this.loginHeading = page.getByTestId("login-heading");
        this.fillEmail = this.page.getByTestId("login-username-input");
        this.fillPassword = this.page.getByTestId("login-password-input");
        this.checkRemember = this.page.getByTestId("login-remember-checkbox");
        this.submitLogin = this.page.getByTestId("login-submit-button");
    }
    
    async openApplication() {
        await this.page.goto("https://www.playwrightautomation.com/", {
        waitUntil: "domcontentloaded",
        });
    }

    async userMoveLogin(){
        await this.goLogin.click();
    }

    async UserFillDetail(emailValue: string, passwordValue: string){
        await this.fillEmail.fill(emailValue);
        await this.fillPassword.fill(passwordValue);
    }

    async markRemember(){
        await this.checkRemember.check();
    }

    async pushLoginButton(){
        await this.submitLogin.click();
    }
}