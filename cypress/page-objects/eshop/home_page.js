import { ShoppingCart } from "./cart_page";
import { EshopHeaderSection } from "./common/header_section_eshop";
import { IPhone } from "./iphone_page";

export class HomePage extends EshopHeaderSection {
  constructor() {
    super();
    this.homeUrl = "http://tredgate.com/eshop/";
    this.addIphoneButton = 'button[type="button"][onclick="cart.add(\'40\');"]';
    this.iphoneImage = "div[class='image'] img[title='iPhone']";
  }

  openEshop() {
    cy.visit(this.homeUrl);
    return this;
  }

  clickAddToCart() {
    cy.get(this.addIphoneButton).click();
    return this;
  }

  clickIphone() {
    cy.get(this.iphoneImage).click();
    return new IPhone();
  }
}
