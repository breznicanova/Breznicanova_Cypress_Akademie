describe("Operating with Cypress Tests", () => {
  it("Failed login test", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("admin");
    cy.get("#password").type("admin");
    // ! tento test spadne pretože prvok neexistuje
    // cy.get("#username2");
    cy.get(".btn").click();
  });

  it("Passed login test", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });
});
