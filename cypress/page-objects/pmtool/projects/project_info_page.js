import { HeaderSection } from "../common/header_section";

export class ProjectInfoPage extends HeaderSection {
  constructor() {
    super();
    this.projectTitleDiv = ".portlet-title .caption";
    this.dateAddedValue = "tr.form-group-154 td";
    this.createdByValue = "tr.form-group-155 td";
    this.priorityValue = "tr.form-group-156 td div";
    this.StatusValue = "tr.form-group-157 td div";
    this.dateAddedValue = "tr.form-group-154 td";
    this.startDateValue = "tr.form-group-159 td";
  }
}
