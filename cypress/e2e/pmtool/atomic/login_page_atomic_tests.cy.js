import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });

    it("Username has placeholder", () => {
      new LoginPage().usernameHasPlaceholder("Username");
    });

    it("Username has value after type", () => {
      const username = "user";
      new LoginPage().typeUsername(username).usernameHaveValue(username);
    });
  });

  context("Password input tests", () => {
    it("Username is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Passwoed has placeholder", () => {
      new LoginPage().passwordHasPlaceholder("Password");
    });
  });
});
