Cypress.config('pageLoadTimeout', 990000)


context('amazonSuite', () => {

    specify('accessAzamonHomePage', () => {
        cy.visit('/', {timeout:50000})    
        cy.location('pathname').should('include', '/')        
    });

    specify('verifyProtocoal', () => {
        cy.location('protocol').should('equal','https:')
    });

    specify('verifyUrl', () => {
        cy.url().should('equal','https://www.amazon.com/')        
    });

    specify('verifyHost', () => {
        cy.location('host').should('equal','www.amazon.com')        
    });
    specify('verifyTitle', () => {
        cy.title().should('include','Spend less')        
    });

   
});