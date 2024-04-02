import { EshopHeaderSection } from "./common/header_section_eshop";

export class IPhone extends EshopHeaderSection {
  constructor() {
    super();
    this.iphonePriceText = "ul[class='list-unstyled'] li h2";
  }

  savePriceForAssertion() {
    cy.get(this.iphonePriceText)
      .invoke("text")
      .then((price) => {
        this.savedPrice = price; // Save the price to the instance variable
        cy.log("Saved price: " + this.savedPrice); // Log the saved price
      });
    return this;
  }

  getSavedPrice() {
    return this.savedPrice; // Method to retrieve the saved price
  }
}
