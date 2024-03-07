export class LoginPage {
  constructor() {
    this.loginUrl = "https://www.saucedemo.com/";
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
  }

  openSaucedemo() {
    cy.visit(this.loginUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    // TODO: add return statement
  }
}
