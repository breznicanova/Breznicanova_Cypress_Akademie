describe("Debugging", () => {
  it("Debugging pmtool", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").debug().type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress").debug();
    cy.get(".btn").click().debug();
  });

  it.skip("PAUSE in it, remove before removing skip! Using pause() function", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").pause().type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress").pause();
    cy.get(".btn").click().pause();
  });
});
