import{ test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test("User Register Sucessifully", async({page})=>{

    const registerPage = new RegisterPage(page);

    await page.goto("https://www.playwrightautomation.com/", {
    waitUntil: "domcontentloaded",
    });

    await page.getByTestId("pw-header-login").click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/login.html");

    await page.getByTestId("login-register-link").click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/register.html");

    await registerPage.chooseCountry();
    await expect(registerPage.selectCountry).toHaveValue("IN");
    await registerPage.fillUserDetails("Biraj", "Pradhan", "birajbrave@yahoo.com", "8032425643");

    await registerPage.chooseOccupation();
    await expect(registerPage.occupation).toHaveValue("qa-engineer");

    await registerPage.chooseGender();
    //await expect(registerPage.radioMale).toBeChecked();

    await registerPage.typePassword("puTu@2022", "puTu@2022");

    await registerPage.checkAge();
    await expect(registerPage.ageGroup).toBeChecked();

    await registerPage.fillDetailRequirement();
    await expect(registerPage.detailRequirement).toBeChecked();

    await registerPage.clickRegisterSubmitButton();

    await expect(page).toHaveURL("https://www.playwrightautomation.com/register.html");
    
});