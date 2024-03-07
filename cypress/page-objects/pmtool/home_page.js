import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutAnchor = "#logout";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }
}
