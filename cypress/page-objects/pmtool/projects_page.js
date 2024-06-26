import { HeaderSection } from "./common/header_section";
import { CreateProjectModal } from "./projects/create_new_project_modal";
import { ProjectInfoPage } from "./projects/project_info_page";

export class ProjectPage extends HeaderSection {
  // new ProjectPage().visit().clickAddProject();
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = 'button[test_id="Add Project"]';
    this.nameInput = 'div[data-testid="Name"] .form-control';
    this.saveButton = 'button[type="submit"]';
    this.pageTitle = "h3.page-title";
    this.projectsTable = ".table-bordered";
    // cy.get(this.pageTitle).should("contain.text", "Projects");  toto som musela zakomentovať pre tie atomické testy, pretože to prebieha tak, ako som to dala do komentára vyššie
    this.projectInfoMenu = "div.navbar-header a.navbar-brand";
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateProjectModal();
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return this;
  }

  clickProjectInfo() {
    cy.get(this.projectInfoMenu).click();
    return new ProjectInfoPage();
  }
}
