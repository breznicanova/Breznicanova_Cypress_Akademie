import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UserPage } from "../../../page-objects/pmtool/users_page";

describe(
  "Users Page Atomic Tests with customElement",
  { testIsolation: false },
  () => {
    before(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      new LoginPage()
        .openPmtool()
        .typeUsername(Cypress.env("pmtool_username"))
        .typePassword(Cypress.env("pmtool_password"))
        .clickLogin();
      new UserPage().visit();
    });

    context("Title tests", () => {
      it("Title is visible", () => {
        new UserPage().pageTitle.isVisible();
      });

      it("Title have text", () => {
        new UserPage().pageTitle.hasText("Users");
      });
    });

    context("Add user button tests", () => {
      it("Add user button is visible", () => {
        new UserPage().addUserButton.isVisible();
      });

      it("Add user button have text", () => {
        new UserPage().addUserButton.hasText("Add User");
      });
    });
  }
);
