export class HomePage {
  constructor() {
    this.storeUrl = "https://www.saucedemo.com/inventory.html";
    this.addProductButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartButton = ".shopping_cart_link";
  }

  openStore() {
    cy.visit(this.storeUrl);
    return this;
  }

  clickAddProduct() {
    cy.get(this.addProductButton).click();
    return this;
  }

  clickCart() {
    cy.get(this.cartButton).click();
    // TODO: add return
  }
}
