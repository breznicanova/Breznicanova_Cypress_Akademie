describe("Handling IFrame & Modals", () => {
  it("Handle webdriveruni iframe and modal", () => {
    cy.visit("https://www.webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();

    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should((modal) => {
      const modalText = modal.text();
      expect(modalText).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      );
    });

    cy.get("@modal").contains("Close").click();
  });
});
