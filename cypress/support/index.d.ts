declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command that seeds Local storage with the following params:
         * @param key
         * @param value
         */
        seedLocalStorage(key: string, value: string): Chainable;
        /**
         * @param value string attached to data-cy
         * @example cy.getDataTag('selector')
         */
        getDataTag(value: string): Chainable<Element>;
        interceptGraphQ1(opName: string): Chainable;
        getAndSetToken(): VoidFunction;
        saveLocalStorage(): Chainable;
        restoreLocalStorage(): Chainable;
        login(): Chainable;
        requestGraphQ1(operationName: string): Chainable;
    }
}