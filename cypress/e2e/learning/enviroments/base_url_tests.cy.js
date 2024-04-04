describe("Base URL Tests", () => {
  it("Using baseUrl in visit", () => {
    cy.visit("/");
    cy.get("#username").should("be.visible");
  });

  it("Open different URL than baseurl", () => {
    cy.visit("https://tredgate.cz");
  });
});
