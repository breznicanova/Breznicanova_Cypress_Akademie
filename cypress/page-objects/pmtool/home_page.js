import { LoginPage } from "./login_page";
import { ProjectPage } from "./projects_page";

export class HomePage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutAnchor = "#logout";
    this.projectsIcon = "#Projects .title";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }

  clickProjectIcon() {
    cy.get(this.projectsIcon).click();
    return new ProjectPage();
  }
}
