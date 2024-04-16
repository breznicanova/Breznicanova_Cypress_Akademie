import { faker } from "@faker-js/faker";

describe("Registration and login tests", () => {
  it("Registration and login using API test", () => {
    const username = faker.internet.userName();
    const password = "CypressJeSuper2024!";
    const email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(email);

    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });

    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
