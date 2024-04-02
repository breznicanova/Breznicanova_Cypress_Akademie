import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsMenu = "#Projects";
    this.dashboardMenu = "#dashboard";
    this.dashboardUser = "#Users a.menu-itemsitems1";
  }

  clickProject() {
    const { ProjectPage } = require("../projects_page"); // !!!!!! aby sa mi to nezacyklilo video na debugging
    cy.get(this.projectsMenu).click();
    return new ProjectPage();
  }

  clickDashboard() {
    const { HomePage } = require("../home_page");
    return new HomePage();
  }

  clickUsers() {
    const { UserPage } = require("../users_page");
    cy.get(this.dashboardUser).click();
    return new UserPage();
  }
}
