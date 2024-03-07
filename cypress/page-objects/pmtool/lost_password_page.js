import { LoginPage } from "./login_page";

export class LostPasswordaPage {
  constructor() {
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.sendButton = ".btn-info";
    this.backButton = "#back-btn";
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickSend() {
    cy.get(this.sendButton).click();
    return new LoginPage();
  }

  clickBack() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }
}
