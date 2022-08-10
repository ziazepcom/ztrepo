/// <reference types="Cypress" />

describe('suiteMDN', () => {
    it('accessMDNPage', () => {
        cy.visit('https://developer.mozilla.org/en-US/')
        expect(title()).is.eq('What Are Cypress Assertions')        
    });
});