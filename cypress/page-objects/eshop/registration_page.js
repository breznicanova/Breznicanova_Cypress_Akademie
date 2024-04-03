import { EshopHeaderSection } from "./common/header_section_eshop";
import { HomePage } from "./home_page";
import { MyAccount } from "./success_page";

export class RegisterAccount extends EshopHeaderSection {
  constructor() {
    super();
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.continueButton = "input[type='submit']";
    this.policyCheckBox = "input[name='agree']";
    this.logoImage = "#logo";
  }
  typeFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }

  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typeTelephone(number) {
    cy.get(this.telephoneInput).type(number);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typePasswordConfirmation(passwordConfirm) {
    cy.get(this.passwordConfirmInput).type(passwordConfirm);
    return this;
  }

  clickPolicyAgreement() {
    cy.get(this.policyCheckBox).click();
    return this;
  }

  clickContinue() {
    cy.get("form").submit();
    return new MyAccount();
  }

  clickImageTredgate() {
    cy.get(this.logoImage).click();
    return new HomePage();
  }
}
