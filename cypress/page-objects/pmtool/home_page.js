export class HomePage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutAnchor = "#logout";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
  }
}
