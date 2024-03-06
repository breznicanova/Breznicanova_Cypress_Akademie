export class HomePage {
  constructor() {
    this.homeUrl = "http://tredgate.com/eshop/";
    this.userButton = ".caret";
    this.userRegisterButton = ".dropdown-menu > :nth-child(1) > a";
  }

  openUrl() {
    cy.visit(this.homeUrl);
  }

  clickUser() {
    cy.get(this.userButton).click();
  }

  clickUserRegister() {
    cy.get(this.userRegisterButton).click();
  }
}
