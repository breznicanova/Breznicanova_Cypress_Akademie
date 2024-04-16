import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/tegb/user_api";

describe("Send API with Objects", () => {
  let username;
  let password;
  let email;
  beforeEach(() => {
    username = faker.internet.userName();
    password = "CypressJeSuper2024!";
    email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(email);
  });

  it("Register and login to TEGB using API Objects", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
    });
    userApi.login(username, password).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
