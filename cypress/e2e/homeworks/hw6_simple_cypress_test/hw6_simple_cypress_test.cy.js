import { faker } from "@faker-js/faker";

describe("Visit Tredgate site", () => {
  const url = "https://tredgate.com/eshop/index.php?route=account/register";

  // Setting variables for filled data
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

  it("Register Account", () => {
    cy.visit(url);
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
    cy.get(".pull-right > .btn").click();
  });
});
