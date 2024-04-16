import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("TegB Login Tests", () => {
  beforeEach(() => {
    new TegBLoginPage().openTegB();
  });

  it("Successful login", () => {
    new TegBLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
