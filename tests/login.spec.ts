import{expect, test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("User Login", async({ page })=>{

    const loginPage = new LoginPage(page);

   await loginPage.openApplication();

    await loginPage.userMoveLogin();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/login.html");

    await expect(loginPage.loginHeading).toHaveText("Sign in");

    await loginPage.UserFillDetail("student", "Password123");

    await loginPage.markRemember();
    await expect(loginPage.checkRemember).toBeChecked();

    await loginPage.pushLoginButton();

})