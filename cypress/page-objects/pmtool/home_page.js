import { HeaderSection } from "./common/header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.projectsIcon = "#Projects .title";
    // this.welcomePageHeader = "#welcome-page-header";
    // cy.get(this.welcomePageHeader).should("be.visible");
  }
}
