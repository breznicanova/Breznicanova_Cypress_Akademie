import { customElement } from "../../helpers/custom_element";
import { HeaderSection } from "./common/header_section";
import { AddUserModal } from "./create_new_user_modal";

export class UserPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitle = customElement("h3.page-title");
    this.addUserButton = customElement('[test_id="Add User"]');
    // this.pageTitle.get().should("contain.text", "Users");
  }

  clickAddUser() {
    this.addUserButton.get().click();
    return new AddUserModal();
  }

  titleIsVisible() {
    this.pageTitle.get().should("be.visible");
    return this;
  }

  titleHaveText(titleText) {
    this.pageTitle.get().should("have.text", titleText);
    return this;
  }

  addUserButtonIsVisible() {
    this.addUserButton.get().should("be.visible");
    return this;
  }

  addUserButtonHaveText(addUserButtonText) {
    this.addUserButton.get().should("have.text", addUserButtonText);
    return this;
  }
}
