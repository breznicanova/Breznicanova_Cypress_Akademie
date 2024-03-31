export class MyAccount {
  constructor() {
    this.successMessage = ".maintext";
  }

  messageShouldHaveText() {
    cy.get(this.successMessage).should(
      "have.text",
      " Your Account Has Been Created!"
    );
    return this;
  }
}
