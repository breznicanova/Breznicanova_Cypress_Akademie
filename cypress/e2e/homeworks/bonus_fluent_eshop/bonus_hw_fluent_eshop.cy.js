import { HomePage } from "../../../page-objects/eshop/home_page";
import { faker } from "@faker-js/faker";
import { IPhone } from "../../../page-objects/eshop/iphone_page";
import { ShoppingCart } from "../../../page-objects/eshop/cart_page";

describe("Tredgate eshop test", () => {
  it("IT FAILS !! Open eshop, register account, add product to cart and check its content", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName,
      lastName: lastName,
      provider: "email.cz",
    });
    const telephone = faker.phone.number();
    const password = faker.internet.password({
      length: 20,
      pattern: /[A-Z 1-9]/,
    });

    new HomePage()
      .openEshop()
      .clickMyAccount()
      .clickRegister()
      .typeFirstName(firstName)
      .typeLastName(lastName)
      .typeEmail(email)
      .typeTelephone(telephone)
      .typePassword(password)
      .typePasswordConfirmation(password)
      .clickPolicyAgreement();
    cy.get("form").submit();
  });

  it.only("Add iPhone to cart", () => {
    const cart = new ShoppingCart();
    const iPhone = new HomePage()
      .openEshop()
      .clickAddToCart()
      .clickIphone()
      .savePriceForAssertion()
      .getSavedPrice();

    new HomePage()
      .openEshop()
      .clickAddToCart()
      .clickIphone()
      .savePriceForAssertion()
      .clickCart()
      .assertPrice();

    cy.wrap(cart.iphonePrice).should("eq", iPhone);
  });
});
