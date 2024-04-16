export class UserApi {
  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "/user/register", // 3000 je pre backend, 3001 je pre frontend
      body: {
        username: username,
        password: password,
        email: email,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "/auth/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
