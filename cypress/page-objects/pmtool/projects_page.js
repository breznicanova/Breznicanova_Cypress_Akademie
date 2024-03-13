import { LoginPage } from "./login_page";

export class ProjectPage {
  constructor() {
    this.addProjectButton = 'button[test_id="Add Project"]';
    this.nameInput = 'div[data-testid="Name"] .form-control';
    this.saveButton = 'button[type="submit"]';
    this.dropdownToggle = "#user_dropdown .dropdown-toggle .fa";
    this.logoutButton = "#logout";
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return this;
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return this;
  }

  clickDropdownMenu() {
    cy.get(this.dropdownToggle).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
