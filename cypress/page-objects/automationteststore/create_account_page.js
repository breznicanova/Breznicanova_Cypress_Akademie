import { MyAccount } from "./my_account_page";

export class CreateAccount {
  constructor() {
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.telephoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";
    this.companyInput = "#AccountFrm_company";
    this.addressFirstInput = "#AccountFrm_address_1";
    this.addressSecondInput = "#AccountFrm_address_2";
    this.cityInput = "#AccountFrm_city";
    this.regionSelect = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.countrySelect = "#AccountFrm_country_id";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.passwordConfirmInput = "#AccountFrm_confirm";
    this.subscriptionButton = "#AccountFrm_newsletter0";
    this.termsCheck = "#AccountFrm_agree";
    this.continueButton = "button[title='Continue']";
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

  typeTelephone(telephone) {
    cy.get(this.telephoneInput).type(telephone);
    return this;
  }

  typeFax(fax) {
    cy.get(this.faxInput).type(fax);
    return this;
  }

  typeCompany(company) {
    cy.get(this.companyInput).type(company);
    return this;
  }

  typeFirstAddress(firstAddress) {
    cy.get(this.addressFirstInput).type(firstAddress);
    return this;
  }

  typeSecondAddress(secondAddress) {
    cy.get(this.addressSecondInput).type(secondAddress);
    return this;
  }

  typeCity(city) {
    cy.get(this.cityInput).type(city);
    return this;
  }

  selectRegion(region) {
    cy.get(this.regionSelect).select(region);
    return this;
  }

  typeZipCode(zipCode) {
    cy.get(this.zipCodeInput).type(zipCode);
    return this;
  }

  selectCountry(country) {
    cy.get(this.countrySelect).select(country);
    cy.wait(1000);
    return this;
  }

  typeLoginName(loginName) {
    cy.get(this.loginNameInput).type(loginName);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typePasswordConfirm(confirm) {
    cy.get(this.passwordConfirmInput).type(confirm);
    return this;
  }

  clickSubscriptionNo() {
    cy.get(this.subscriptionButton).click();
    return this;
  }

  clickTermsAgreement() {
    cy.get(this.termsCheck).click();
    return this;
  }

  clickContinue() {
    cy.get(this.continueButton).click();
    return new MyAccount();
  }
}
