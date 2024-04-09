describe("Tab hack chacks", () => {
  it("Modify tab to open in same screen", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    // !! toto nebude fungovať cy.get("#contact-us").click();
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').should("be.visible");
  });
});
