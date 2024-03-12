import { LoginPage } from "./login_page";
import { ShoppingBag } from "./shopping_bag";

export class HomePage {
  constructor() {
    this.menuButton = "#react-burger-cross-btn";
    this.logoutButton = "#logout_sidebar_link";
    this.addToCartButton = "#add-to-cart-sauce-labs-backpack";
    this.cartButton = ".shopping_cart_link";
  }

  clickMenuBotton() {
    cy.get(this.menuButton).click({ force: true });
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  clickAddToCart() {
    cy.get(this.addToCartButton).click();
    return this;
  }

  clickCart() {
    cy.get(this.cartButton).click();
    return new ShoppingBag();
  }
}
