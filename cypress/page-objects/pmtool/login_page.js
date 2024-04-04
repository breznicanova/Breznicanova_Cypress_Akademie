import { HomePage } from "./home_page";
import { LostPasswordaPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "http://tredgate.com/pmtool/";
    this.usernameInput = "#username"; // !!!!!! .usernameInput
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.forgetPasswordButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.logo = ".login-page-logo img";
    this.rememberMeCheckbox = ".checkbox";
    this.alertDiv = "div.alert";
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist"); // not visible spadne ak to tam vôbec nie je, používať not.exist
    return this;
  }

  pageHeaderHaveText(headerText) {
    // !!!!!!!! predávame to parametrom .. kukni pmtool login_page_tests.cy.js
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
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
    return new HomePage();
  }

  clickPasswordForgotten() {
    cy.get(this.forgetPasswordButton).click();
    return new LostPasswordaPage();
  }

  usernameHasPlaceholder(placeholderText) {
    cy.get(this.usernameInput).should(
      "have.attr",
      "placeholder",
      placeholderText
    );
    return this;
  }

  passwordHasPlaceholder(placeholderText) {
    cy.get(this.passwordInput).should(
      "have.attr",
      "placeholder",
      placeholderText
    );
    return this;
  }

  rememberMeHasText(rememberMeText) {
    cy.get(this.rememberMeCheckbox).should("have.text", rememberMeText);
    return this;
  }

  passwordForgottenHasText(elementText) {
    cy.get(this.forgetPasswordButton).should("have.text", elementText);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logo).should("be.visible");
    return this;
  }

  usernameIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHaveValue(username) {
    cy.get(this.usernameInput).should("have.value", username);
    return this;
  }

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }
}
