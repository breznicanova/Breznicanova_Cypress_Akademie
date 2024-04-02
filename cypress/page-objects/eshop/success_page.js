import { EshopHeaderSection } from "./common/header_section_eshop";
import { HomePage } from "./home_page";

export class MyAccount extends EshopHeaderSection {
  constructor() {
    super();
    this.successMessage = "#content h1";
    this.logoImage = "#logo";
  }

  messageShouldHaveText() {
    cy.get(this.successMessage).should(
      "have.text",
      " Your Account Has Been Created!"
    );
    return this;
  }

  clickHomePage() {
    cy.get(this.logoImage).click();
    return new HomePage();
  }
}
