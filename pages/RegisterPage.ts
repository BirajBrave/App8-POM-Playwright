import{ expect, Page } from "@playwright/test";

export class RegisterPage{

    private firstName;
    private lastName;
    private email;
    readonly selectCountry;
    private phoneNumber;
    readonly occupation;
    readonly radioMale;
    private password;
    private confirmPassword;
    readonly ageGroup;
    readonly detailRequirement;

    private registerSubmitButton;

    constructor(private page: Page){
        this.firstName = this.page.getByTestId("register-first-name-input");
        this.lastName = this.page.getByTestId("register-last-name-input");
        this.email = this.page.getByTestId("register-email-input");
        this.selectCountry = this.page.getByTestId("register-phone-country");
        this.phoneNumber = this.page.getByTestId("register-phone-input");
        this.occupation = this.page.getByTestId("register-occupation-select");
        this.radioMale = this.page.locator('input[value="male"]');
        this.password = this.page.getByTestId("register-password-input");
        this.confirmPassword = this.page.getByTestId("register-confirm-password-input");
        this.ageGroup = this.page.getByTestId("register-age-checkbox");
        this.detailRequirement = this.page.getByTestId("register-marketing-opt-in-checkbox");
        this.registerSubmitButton = this.page.getByTestId("register-submit-button");
    }

     async chooseCountry(){
        await this.selectCountry.selectOption("IN");
    }
    
    async fillUserDetails(firstNameValue: string, lastNameValue: string, emailValue: string, phoneValue: string){
        await this.firstName.fill(firstNameValue);
        await this.lastName.fill(lastNameValue);
        await this.email.fill(emailValue);
        await this.phoneNumber.fill(phoneValue);
    }

    async chooseOccupation(){
        await this.occupation.selectOption("qa-engineer");
    }

    async chooseGender() {
        await this.radioMale.click();
    }

    async typePassword(passwordValue: string, confirmPasswordValue: string){
        await this.password.fill(passwordValue);
        await this.confirmPassword.fill(confirmPasswordValue);
    }

   async checkAge(){
    await this.ageGroup.check();
   }

   async fillDetailRequirement(){
    await this.detailRequirement.check();
   }

   async clickRegisterSubmitButton(){
    await this.registerSubmitButton.click();
   }
}