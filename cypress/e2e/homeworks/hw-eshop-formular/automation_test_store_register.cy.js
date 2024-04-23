import { faker } from "@faker-js/faker";
import { HomePage } from "../../../page-objects/automationteststore/home_page";
import { CreateAccount } from "../../../page-objects/automationteststore/create_account_page";

describe("Fill Automation Test Store Formular", () => {
  it("Open eshop and register new account", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.exampleEmail({
      firstName: firstName,
      lastName: lastName,
    });
    const telephone = faker.phone.number();
    const fax = faker.random.numeric(9);
    const company = faker.company.name();
    const addressFirst = faker.location.streetAddress(true);
    const addressSecond = faker.location.city();
    const city = addressSecond;
    const zipCode = faker.location.zipCode();
    const loginName = faker.internet.userName({ firstName: firstName });
    const password = faker.internet.password({ length: 20 });

    new HomePage()
      .openEshop()
      .clickLoginOrRegister()
      .clickContinue()
      .typeFirstName(firstName)
      .typeLastName(lastName)
      .typeEmail(email)
      .typeTelephone(telephone)
      .typeFax(fax)
      .typeCompany(company)
      .typeFirstAddress(addressFirst)
      .typeSecondAddress(addressSecond)
      .typeCity(city)
      .selectCountry("56")
      .typeZipCode(zipCode)
      .selectRegion("901")
      .typeLoginName(loginName)
      .typePassword(password)
      .typePasswordConfirm(password)
      .clickSubscriptionNo()
      .clickTermsAgreement()
      .clickContinue()
      .messageShouldHaveText();
  });
});
