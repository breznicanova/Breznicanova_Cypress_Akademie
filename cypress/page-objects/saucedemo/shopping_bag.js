export class ShoppingBag {
  constructor() {
    this.removeButton = 'button[data-test="remove-sauce-labs-backpack"]';
  }

  clickRemove() {
    cy.get(this.removeButton).click();
    return this;
  }
}
