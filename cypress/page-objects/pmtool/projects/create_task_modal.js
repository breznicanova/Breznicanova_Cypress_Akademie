import { ProjectsTasksPage } from "./tasks_page";

export class CreateTaskModal {
  constructor() {
    this.typeSelect = 'div[data-testid="Type"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.assigneeLabel = ".checkboxes_list label";
    this.saveButton = 'button[type="submit"]';
  }

  selectType(taskType) {
    cy.get(this.typeSelect).select(taskType);
    return this;
  }

  typeName(taskName) {
    cy.get(this.nameInput).type(taskName);
    return this;
  }

  selectStatus(taskStatus) {
    cy.get(this.statusSelect).select(taskStatus);
    return this;
  }

  assignTask(fullName) {
    cy.contains(this.assigneeLabel, fullName).click();
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }
}
