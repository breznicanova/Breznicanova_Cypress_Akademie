describe("Výzva", () => {
  it("Nákup", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    cy.get(".block_7 > .nav > .dropdown > .dropdown-toggle").click();
    cy.get(":nth-child(7) > .btn > .fa").click();
  });
});
