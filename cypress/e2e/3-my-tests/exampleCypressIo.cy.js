/// <reference types="Cypress" />

describe('expCypress', () => {

    it('cypressHomePage', () => {
       // cy.visit('https://example.cypress.io/
        cy.visit('/')
        cy.pause()
        cy.contains('type').click()

        cy
        .url().should('include', '/commands/actions')

        cy
        .get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')

        //.reload()

    });    
    
   /* it('TC01', () => {
        cy.contains('type')
    });


   it('findElements',()=>{      
        cy.contains('get').click()     

        cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')
       
        cy.get('h1')
        .should('have.text', 'Querying')

        cy.get('.pull-right > li > a')
        .should('be.visible', 'GitHub')

        cy.get('.dropdown-toggle')
        //.should('be.enabled')

       // cy.get('.navbar-brand')
       // .should('be.enabled', 'cypress.io')

       expect(true).to.be.true
       
       let name = 'zia'
       expect(name).to.be.equal('zia')

       assert.strictEqual(4,'4','Not Equal')
       //assert.strictEqual(4,'4', 'is not strict equal')
    })  
    COMMANDS WITH DEFAULT ASSERTIONS:
    cy.visit()      expects the page to send text/html content with a 200 status code.
    cy.request()    expects the remote server to exist and provide a response.
    cy.contain()    expects the element with content to eventually exist in the DOM.
    cy.get          expects the element to eventually exist in the DOM
    cy.find         also expects the element to eventually exist in the DOM.
    cy.type         expects the element to eventually be in a typeable state.
    cy.click()      expects the element to eventually be in an actionable state.
    .its()          expects to eventually find a property on the current subject.

    Certain commands may have a specific requirement that causes them to immediately fail without retrying: 
    such as cy.request().
    
    
    */
});
