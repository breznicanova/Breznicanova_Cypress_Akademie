import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it.only("Pmtool Login and Logout test", () => {
    const loginPage = new LoginPage();
    const homepage = new HomePage();

    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
    homepage.clickProfile();
    homepage.clickLogout();
  });
});
