import { LoginPage } from "../../page-objects/saucedemo/login_page";

describe("Sauce demo test", () => {
  it("Login To Saucedemo", () => {
    new LoginPage()
      .openSaucedemo()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin();
  });
});
