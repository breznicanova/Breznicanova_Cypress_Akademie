import { EshopHeaderSection } from "./common/header_section_eshop";

export class HomePage extends EshopHeaderSection {
  constructor() {
    super();
    this.homeUrl = "http://tredgate.com/eshop/";
    this.addIphoneButton = 'button[type="button"][onclick="cart.add(\'40\');"]';
    this.iphoneImage = "div[class='image'] img[title='iPhone']";
    this.successMessage = ".alert-success";
  }

  openEshop() {
    cy.visit(this.homeUrl);
    return this;
  }

  clickAddToCart() {
    cy.get(this.addIphoneButton).click();
    return this;
  }

  successMessageIsVisible() {
    cy.get(this.successMessage).should("be.visible");
    return this;
  }
}
