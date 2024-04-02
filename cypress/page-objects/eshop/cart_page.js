import { EshopHeaderSection } from "./common/header_section_eshop";
import { IPhone } from "./iphone_page";

export class ShoppingCart extends EshopHeaderSection {
  constructor() {
    super();
    this.unitPriceTextXpath = '//tbody//td[5][@class="text-right"]';
  }

  assertPrice() {
    // Retrieve the price from the shopping cart
    cy.xpath(this.unitPriceTextXpath)
      .invoke("text")
      .then((price) => {
        this.iphonePrice = price; // Save the price to the instance variable
        cy.log("Iphone price: " + this.iphonePrice); // Log the saved price
      });
    return this;
  }
}
