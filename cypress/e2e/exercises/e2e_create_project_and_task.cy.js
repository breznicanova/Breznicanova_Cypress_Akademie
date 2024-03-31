import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";
import { ProjectPage } from "../../page-objects/pmtool/projects_page";

describe("Create new Project and Task E2E Test", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProject();
  });
  it("Create project and task", () => {
    const todayDate = "2024-03-28";
    const randomInt = faker.number.int({ min: 1000, max: 9999 });
    const projectName = `Breznicanova_self-exercise_${randomInt}`;
    cy.log(projectName);
    cy.fixture("upload_test.txt", { encoding: null }).as("uploadFile");
    const taskName = `Breznicanova_TASK_${randomInt}`;

    new ProjectPage()
      .clickAddProject()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .typeStartDate(todayDate)
      .insertFileToUpload("@uploadFile")
      .clickSave()
      .clickAddTask()
      .selectStatus("Open")
      .selectType("Change")
      .typeName(taskName)
      .assignTask("Petr Fifka")
      .clickSave();
  });
});
