describe('spiceJetSuite', () => {

    it('accessHomePage', () => {
        cy.visit('https://www.spicejet.com/')
        cy.contains('Add-ons').trigger('mouseover')
       // cy.contains('Login / Signup').trigger('mouseover')
        
    });
});