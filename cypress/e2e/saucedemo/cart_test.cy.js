import { LoginPage } from "../../page-objects/saucedemo/login_page";

describe("Saucedemo add to cart", () => {
  it("Cart test", () => {
    new LoginPage()
      .openSaucedemo()
      .typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLogin()
      .clickAddToCart()
      .clickCart()
      .clickRemove();
  });
});
