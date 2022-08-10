describe('AppliToolSuite', () => {
//https://the-kitchen-applitools.netlify.app
//'/ingredient/isframe'

    it('visiting', () => {
        cy.visit('/ingredients/iframe') 
        cy.get('#the-kitchen-table').its('0.contentDocument.body')
        .then(cy.wrap).find('#fruits-vegetables')       
    });
});