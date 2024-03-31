import { AccountLogin } from "./account_login_page";

export class HomePage {
  constructor() {
    this.homeUrl = "https://automationteststore.com/";
    this.customerMenuButton = "#customer_menu_top a";
  }

  openEshop() {
    cy.visit(this.homeUrl);
    return this;
  }

  clickLoginOrRegister() {
    cy.get(this.customerMenuButton).click();
    return new AccountLogin();
  }
}
