import newUserData from "../../../fixtures/add_user_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { AddUserModal } from "../../../page-objects/pmtool/create_new_user_modal";

describe("Homework data driven test", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers()
      .clickAddUser();
  });

  newUserData.forEach((newUserData) => {
    it(`Add new user ${newUserData.description}, login new user and check username`, () => {
      const username =
        newUserData.name_prefix + faker.number.int({ max: 99999 });
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const userEmail = faker.internet.email({
        firstName: firstName,
        lastName: lastName,
        provider: "ab.tredgate.com",
      });

      cy.log(username);
      cy.log(firstName);
      cy.log(lastName);
      cy.log(userEmail);

      new AddUserModal()
        .selectAccessGroup(newUserData.access_group)
        .typeUsername(username)
        .typePassword(newUserData.password)
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typeEmail(userEmail)
        .clickSave()
        .clickProfile()
        .clickLogout()
        .typeUsername(username)
        .typePassword(newUserData.password)
        .clickLogin()
        .usernameText.containsText(`${firstName} ${lastName}`);
    });
  });
});
