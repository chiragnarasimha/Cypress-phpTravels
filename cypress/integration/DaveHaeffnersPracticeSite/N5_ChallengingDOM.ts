import {
  addElements,
  deleteElements,
} from "../../support/DaveHaeffnersPracticeSiteFunctions";

context("Automate unstable DOM scenarios", () => {
  before(() => {
    cy.visit("http://the-internet.herokuapp.com");
  });
  it.skip("Add Elements Page ", () => {
    cy.visit(`http://the-internet.herokuapp.com/add_remove_elements/`);
    addElements(10);
    deleteElements(10);
  });

  it("Challenging DOM Page", () => {
    cy.visit("http://the-internet.herokuapp.com/challenging_dom");

    cy.xpath(
      `//h3[text()="Challenging DOM"]//following::div[@class="large-2 columns"]/a[2]`
    ).click();
    cy.xpath(
      `//h3[text()="Challenging DOM"]//following::div[@class="large-2 columns"]/a[2]`
    ).click();
    cy.xpath(
      `//h3[text()="Challenging DOM"]//following::div[@class="large-2 columns"]/a[2]`
    ).click();
  });
});
