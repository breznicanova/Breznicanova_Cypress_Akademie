import { EshopHeaderSection } from "./common/header_section_eshop";

export class ShoppingCart extends EshopHeaderSection {
  constructor() {
    super();
    this.unitPriceTextXpath = '//tbody//td[5][@class="text-right"]';
    this.quantityImput = "input[value='1']";
    this.totalPriceTextXpath = '//tbody//td[6][@class="text-right"]';
    this.removeButton = "button[data-original-title='Remove']";
  }

  assertUnitPrice() {
    cy.xpath(this.unitPriceTextXpath).should("have.text", "$101.00");
    return this;
  }

  assertQuantity() {
    cy.get(this.quantityImput).should("have.value", "1");
    return this;
  }

  assertTotalPrice() {
    cy.xpath(this.totalPriceTextXpath).should("have.text", "$101.00");
    return this;
  }

  clickRemoveIphone() {
    cy.get(this.removeButton).click();
    return this;
  }
}
