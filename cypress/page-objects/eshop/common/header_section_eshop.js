export class EshopHeaderSection {
  constructor() {
    this.myAccountMenu = "a[title='My Account']";
    this.registerButton =
      "a[href='https://tredgate.com/eshop/index.php?route=account/register']";
    this.shoppingCartButton = "a[title='Shopping Cart']";
  }

  clickMyAccount() {
    cy.get(this.myAccountMenu).click();
    return this;
  }

  clickRegister() {
    const { RegisterAccount } = require("../registration_page"); // !!!!!! aby sa mi to nezacyklilo
    cy.get(this.registerButton).click();
    return new RegisterAccount();
  }

  clickCart() {
    const { ShoppingCart } = require("../cart_page");
    cy.get(this.shoppingCartButton).click();
    return new ShoppingCart();
  }
}
