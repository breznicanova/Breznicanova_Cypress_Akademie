import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/tegb/user_api";

describe("Using API to login and store cookie", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "CypressJeSuper2024!";
    email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(email);
    // ! Musíme zavolat otevření stránky před uložením cookie, jinak se nám cookie neuloží správně.
    cy.visit(Cypress.env("tegb_url"));
  });

  it.only("Tegb registration, login using API", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
    });
    userApi.login(username, password).then((response) => {
      expect(response.status).to.eq(201);
      const accessTokenValue = response.body.access_token;
      cy.setCookie("access_token", accessTokenValue);
    });

    cy.visit(Cypress.env("tegb_url") + "/app");
  });
});
