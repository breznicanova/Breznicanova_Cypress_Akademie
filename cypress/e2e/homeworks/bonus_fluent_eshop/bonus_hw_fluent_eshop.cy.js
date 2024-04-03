import { HomePage } from "../../../page-objects/eshop/home_page";
import { faker } from "@faker-js/faker";

describe("Tredgate eshop test", () => {
  it("Open eshop, register account, add product to cart and check its content", () => {
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
      .clickPolicyAgreement()
      // .clickContinue()
      .clickImageTredgate()
      .clickAddToCart()
      .successMessageIsVisible()
      .clickCart()
      .assertUnitPrice()
      .assertQuantity()
      .assertTotalPrice()
      .clickRemoveIphone();
  });
});
