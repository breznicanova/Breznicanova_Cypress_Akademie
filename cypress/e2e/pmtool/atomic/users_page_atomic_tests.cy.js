import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UserPage } from "../../../page-objects/pmtool/users_page";

describe("Users page atomic tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UserPage().visit();
  });
  context("Title tests", () => {
    it("Title is visible", () => {
      new UserPage().titleIsVisible();
    });

    it("Title have text", () => {
      new UserPage().titleHaveText("Users");
    });
  });

  context("Add user button tests", () => {
    it("Add user button is visible", () => {
      new UserPage().addUserButtonIsVisible();
    });

    it("Add user button have text", () => {
      new UserPage().addUserButtonHaveText("Add User");
    });
  });
});
