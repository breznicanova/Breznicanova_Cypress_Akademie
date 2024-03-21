import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe("Pmtool HW selectors test", () => {
  it("Add Project - Pmtool", () => {
    const projectName = `ADBR_hw_cypress_${faker.random
      .alpha({ count: 2 })
      .toUpperCase()}_${faker.datatype.number({ min: 1000, max: 9999 })}`;

    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProjects()
      .clickAddProject()
      .typeName(projectName)
      .clickSave()
      .clickProfile()
      .clickLogout();
  });
});
