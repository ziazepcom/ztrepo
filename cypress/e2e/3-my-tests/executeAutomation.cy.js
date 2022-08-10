/// <reference types="Cypress" />
describe('execAuto', () => {
    
    before(() => {
        cy.visit('https://www.executeautomation.com//site')
    });

    it('verifyEAProtocol', () => {
        cy.location('protocol').should('eq','https:')

    });

});