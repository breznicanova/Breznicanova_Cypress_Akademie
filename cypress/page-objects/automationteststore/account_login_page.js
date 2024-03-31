import { CreateAccount } from "./create_account_page";

export class AccountLogin {
  constructor() {
    this.continueButton = 'button[title = "Continue"]';
  }

  clickContinue() {
    cy.get(this.continueButton).click();
    return new CreateAccount();
  }
}
