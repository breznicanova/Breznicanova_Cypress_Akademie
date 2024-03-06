import { HomePage } from "../../../page-objects/eshop/home_page";
import { RegisterAccount } from "../../../page-objects/eshop/registration_page";
import { faker } from "@faker-js/faker";

describe("Page Objects Homework", () => {
  it("Reguster user", () => {
    const homePage = new HomePage();
    const registerAccount = new RegisterAccount();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName,
      lastName: lastName,
      provider: "email.cz",
      allowSpecialCharacters: true,
    });
    const telephone = faker.phone.number("+420#########");
    const password = faker.internet.password({ length: 12 });

    homePage.openUrl();
    homePage.clickUser();
    homePage.clickUserRegister();
    registerAccount.typeFirstName(firstName);
    registerAccount.typeLastName(lastName);
    registerAccount.typeEmail(email);
    registerAccount.typeTelephone(telephone);
    registerAccount.typePassword(password);
    registerAccount.typePasswordConfirmation(password);
    registerAccount.clickRegister();
  });
});
