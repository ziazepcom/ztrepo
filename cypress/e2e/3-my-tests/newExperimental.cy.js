/// <reference types = "Cypress" />

describe('randomTests', () => {
    it('testUrl', () => {
        cy.visit('https://www.cnn.com/')
        cy.location('href')        
    });
});