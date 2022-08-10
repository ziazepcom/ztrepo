describe('sauceDemoSuite', () => {

before(() => {
    cy.SauceDemoLogin() // calling custom command for login
});

it('verifyProtocol', () => {
    cy.location('host').should('eq','https:')         
});
});