import { customElement } from "../../../helpers/custom_element";
import { ProjectsTasksPage } from "./tasks_page";

export class CreateProjectModal {
  constructor() {
    this.prioritySelect = "div[data-testid='Priority'] select";
    this.statusSelect = "div[data-testid='Status'] select";
    this.nameInput = "div[data-testid='Name'] input";
    this.startDateInput = "div[data-testid='Start Date'] input";
    this.fileUploadXpath =
      '//div[@data-testid="Attachments"]//input[contains(@id, "uploadifive_attachments_upload")]';
    this.saveButton = "button[type='submit']";
    this.descriptionIframe = customElement("#cke_1_contents iframe");
  }

  typeDescription(descriptionText) {
    this.descriptionIframe.get().then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").type(descriptionText);
    return this;
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeProjectName(projectName) {
    cy.get(this.nameInput).type(projectName);
    return this;
  }

  /**
   *
   * @param {string} startDate musí byť vo formáte YYYY-MM-DD
   * @returns this page object
   */
  typeStartDate(startDate) {
    cy.get(this.startDateInput).type(startDate);
    return this;
  }

  /**
   *
   * je nutné nastaviť v teste alias "uploadFile", ktorý sa uploaduje
   */
  insertFileToUpload() {
    cy.xpath(this.fileUploadXpath).selectFile("@uploadFile", {
      force: true,
    });
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }
}
