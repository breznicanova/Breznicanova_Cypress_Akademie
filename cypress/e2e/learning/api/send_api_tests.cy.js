import { faker } from "@faker-js/faker";

describe("Send HTTP Requests Tests", () => {
  it("POST registration TEG#B", () => {
    const username = faker.internet.userName();
    const password = "CypressJeSuper2024!";
    const email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(email);

    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register", // 3000 je pre backend, 3001 je pre frontend
      body: {
        username: username,
        password: password,
        email: email,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userId");
      expect(response.body.userId).to.be.a("number");
      expect(response.body.username).to.be.eq(username);
    });
  });
});
