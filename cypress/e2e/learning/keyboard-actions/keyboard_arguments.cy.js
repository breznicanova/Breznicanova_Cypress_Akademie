describe("Keyboard arguments", () => {
  it("Confirm form by pressing enter key", () => {
    cy.visit("http://tredgate.com/pmtool/index.php?module=users/login");
    cy.get("#username").type("fifka_petr");
    cy.get("#password").type("Tredgate2023{enter}");
  });
});
