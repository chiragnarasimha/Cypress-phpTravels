import {
  xPath_addElementsButton,
  xPath_deleteElementsButton,
} from "./DaveHaeffnersPracticeSitexPaths";

export function addElements(numOfElements: number) {
  for (let i = 0; i < numOfElements; i++) {
    cy.xpath(`${xPath_addElementsButton}`).click();
    cy.xpath(`(${xPath_deleteElementsButton})[${i + 1}]`).should(`be.visible`);
  }
}

export function deleteElements(numOfElements: number) {
  for (let i = 0; i < numOfElements; i++) {
    cy.xpath(`(${xPath_deleteElementsButton})[${numOfElements - i}]`).click();
    cy.xpath(`(${xPath_deleteElementsButton})[${numOfElements - i}]`).should(
      `not.exist`
    );
  }
}
