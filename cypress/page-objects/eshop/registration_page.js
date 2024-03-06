export class RegisterAccount {
  constructor() {
    this.registerUrl =
      "https://tredgate.com/eshop/index.php?route=account/register";
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.registerButton = ".pull-right > .btn";
  }

  openUrl() {
    cy.visit(this.registerUrl);
  }

  typeFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
  }

  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  typeTelephone(number) {
    cy.get(this.telephoneInput).type(number);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  typePasswordConfirmation(passwordConfirm) {
    cy.get(this.passwordConfirmInput).type(passwordConfirm);
  }

  clickRegister() {
    cy.get(this.registerButton).click();
  }
}
