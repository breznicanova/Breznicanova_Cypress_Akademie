describe("Visit Tredgate site", () => {
  const url = "https://tredgate.com/eshop/index.php?route=account/register";

  // Setting variables for filled data
  const firstName = "Adriana";
  const lastName = "Brezničanová";
  const email = "breznicanova.adriana@email.cz";
  const telephone = "737000333";
  const password = "abcd1234";

  it("Register Account", () => {
    cy.visit(url);
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
    cy.get(".pull-right > .btn").click();
  });
});
