import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Lost password tests", () => {
  it("Lost password", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("lost_password_user")
      .typePassword("lost_password@tredgate.cz")
      .clickLogin();
  });

  it("Open Forgotten password page", () => {
    new LoginPage().openPmtool().clickPasswordForgotten().clickBack();
  });
});
