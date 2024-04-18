import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { CreateProjectModal } from "../../page-objects/pmtool/projects/create_new_project_modal";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProject()
      .clickAddProject();
  });
  newProjectData.forEach((projectData) => {
    it(`DDT project: ${projectData.description}`, () => {
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 99999 });

      console.log(projectData.start_date);
      const generatedStartDate = generateStartDate(
        projectData.start_date,
        "YYYY-MM-DD"
      );

      cy.log(projectName);
      cy.log(generatedStartDate);

      new CreateProjectModal()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeProjectName(projectName)
        .typeStartDate(generatedStartDate)
        .typeDescription(projectData.description)
        .clickSave()
        .clickProjectInfo()
        .projectHavePriority(projectData.priority)
        .projectHaveStartDate(
          generateStartDate(projectData.start_date, "DD/MM/YYYY")
        )
        .projectHaveStatus(projectData.status)
        .projectTitleHasText(projectName)
        .descriptionHaveText(projectData.description);
    });
  });
});

function generateStartDate(startDate, format) {
  let generatedDate;
  switch (startDate) {
    case "today":
      generatedDate = moment().format(format);
      break;
    case "tomorrow":
      generatedDate = moment().add(1, "days").format(format);
      break;
    case "yesterday":
      generatedDate = moment().subtract(1, "days").format(format);
      break;
    default:
      throw new Error("Invalid start date");
  }

  return generatedDate;
}
