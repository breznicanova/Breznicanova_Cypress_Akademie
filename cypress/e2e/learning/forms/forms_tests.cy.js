describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get('[name="subscription"]').check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check 2 interests", () => {
    cy.get('[name="interests[]"]').check(["sports", "travel"]);
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-travel").should("be.checked");
  });

  it("Check and uncheck checkbox", () => {
    cy.get('[name="interests[]"]').check("travel");
    cy.get("#interests-travel").should("be.checked");
    cy.get('[name="interests[]"]').uncheck("travel");
    cy.get("#interests-travel").should("not.be.checked");
  });

  it("Clear and fill name", () => {
    cy.get("#name")
      .clear()
      .type("Adriana Brez")
      .should("have.value", "Adriana Brez");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female"); // vždy si v HTML skontroluj či to je select, ak nie, a je to div alebo tak, tak k tomu pristupuješ normálne ako ku každému elementu click() -om
    cy.get("#gender").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("#myForm").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!");
  });

  // toto bude fungovať iba u mňa v PC
  it("Upload file", () => {
    const fileName = "C:UsersadbrDownloadsFPSmonitor.txt";
    cy.get('input[type="file"]').selectFile(fileName);
  });

  it("Upload file fixures", () => {
    cy.fixture("upload_test.txt").as("upload_file"); // môžem zadať aj encode za ten súbor
    cy.get("#file-upload").selectFile("@upload_file");
  });

  it(`Type date`, () => {
    cy.get("#datepicker").type("1990-12-31"); // ak je to type="date" tak to musíme dať v tomto formáte rok-mesiac-deňgit
    cy.get("#datepicker").should("have.value", "1990-12-31");
  });
});
