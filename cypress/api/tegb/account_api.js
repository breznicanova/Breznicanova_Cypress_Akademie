export class AccountApi {
  createAccount() {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "/accounts",
    });
  }
}
