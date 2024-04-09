import { customElement } from "../../helpers/custom_element";
import { HomePage } from "./home_page";
import { LostPasswordaPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "http://tredgate.com/pmtool/";
    this.usernameInput = customElement("#username"); // !!!!!! .usernameInput
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.forgetPasswordButton = customElement("#forget_password");
    this.pageHeader = customElement("h3.form-title");
    this.logo = customElement(".login-page-logo img");
    this.rememberMeCheckbox = customElement(".checkbox");
    this.alertDiv = customElement("div.alert");
  }

  alertNotExist() {
    this.alertDiv.get().should("not.exist"); // not visible spadne ak to tam vôbec nie je, používať not.exist
    return this;
  }

  pageHeaderHaveText(headerText) {
    // !!!!!!!! predávame to parametrom .. kukni pmtool login_page_tests.cy.js
    this.pageHeader.get().should("have.text", headerText);
    return this;
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.get().click();
    return new HomePage();
  }

  clickPasswordForgotten() {
    this.forgetPasswordButton.get().click();
    return new LostPasswordaPage();
  }

  usernameHasPlaceholder(placeholderText) {
    this.usernameInput
      .get()
      .should("have.attr", "placeholder", placeholderText);
    return this;
  }

  passwordHasPlaceholder(placeholderText) {
    this.passwordInput
      .get()
      .should("have.attr", "placeholder", placeholderText);
    return this;
  }

  rememberMeHasText(rememberMeText) {
    this.rememberMeCheckbox.get().should("have.text", rememberMeText);
    return this;
  }

  passwordForgottenHasText(elementText) {
    this.forgetPasswordButton.get().should("have.text", elementText);
    return this;
  }

  logoIsVisible() {
    this.logo.get().should("be.visible");
    return this;
  }

  usernameIsVisible() {
    this.usernameInput.get().should("be.visible");
    return this;
  }

  usernameHaveValue(username) {
    this.usernameInput.get().should("have.value", username);
    return this;
  }

  passwordIsVisible() {
    this.passwordInput.get().should("be.visible");
    return this;
  }
}
