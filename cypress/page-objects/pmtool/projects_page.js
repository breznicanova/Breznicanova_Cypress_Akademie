import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";

export class ProjectPage extends HeaderSection {
  constructor() {
    super();
    this.addProjectButton = 'button[test_id="Add Project"]';
    this.nameInput = 'div[data-testid="Name"] .form-control';
    this.saveButton = 'button[type="submit"]';
    this.pageTitle = "h3.page-title";
    cy.get(this.pageTitle).should("contain.text", "Projects");
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
}
