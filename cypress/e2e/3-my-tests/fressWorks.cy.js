/// <reference types = "Cypress" />

describe('suiteFreshWorks', () => {

    it('accessHomePage', () => {
        cy.get('https://www.freshworks.com/')
    });
});