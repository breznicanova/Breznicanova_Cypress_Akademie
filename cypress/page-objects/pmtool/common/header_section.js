import { customElement } from "../../../helpers/custom_element";
import { LoginPage } from "../login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = customElement("#user_dropdown > .dropdown-toggle");
    this.logoutButton = customElement("#logout > a");
    this.usernameText = customElement(".username");
  }

  clickProfile() {
    this.profileButton.get().click();
    return this;
  }

  clickLogout() {
    this.logoutButton.get().click();
    return new LoginPage();
  }
}
