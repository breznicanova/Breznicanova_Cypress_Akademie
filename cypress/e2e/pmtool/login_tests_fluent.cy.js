import { LoginPage } from "../../page-objects/pmtool/login_page";
import { LostPasswordaPage } from "../../page-objects/pmtool/lost_password_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login to pmtool using Fluent API test", () => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");

    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it.skip("Open lost password page and return to LoginPage", () => {
    new LoginPage().clickLostPassword().clickBack();
  });
});
