/// <reference types="Cypress" />

describe('suiteNopAdmin', () => {


    it('accessnaHomePage', () => {        
        cy.visit('/')
        cy.adncLogin('admin@yourstore.com','admin')
    });

    it('addCustomers', () => {
        cy.get('P').contains(' Customers ').click()
        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link > p').click()
        cy.get('i').contains( 'Add new ').click()
        cy.get('#Email').type('cn1@yourstore.com')
        cy.get('#Password').type('cn1password')
    })
});