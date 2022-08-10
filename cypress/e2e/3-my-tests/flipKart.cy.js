/// <reference types = 'Cypress' />
//https://www.flipkart.com/

describe('flipkartSuite', () => {


    it('accessfkHomePage', () => {
        cy.visit('/')
        // locating the element using the class selector
       // cy.get('._3704LK').type("Element Found by using class selector")
        // locating the element using the attribute=value technique
        cy.get('[title="Search for products, brands and more"]').type('using Title=value technique') 
        cy.get('._34RNph:first').click()   
        cy.get('._2oO9oE').should('have',Attr(css='1'))
    })
});