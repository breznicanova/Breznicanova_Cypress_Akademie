export class GeneralPOPage {
  // 1. konstruktor
  constructor() {
    this.someElementSelector = "selector";
  }

  // 2. Akce

  logSomeElementSelector() {
    // názov začni s tým čo robíš !!!
    cy.log(this.someElementSelector);
  }
}
