/// <reference types="Cypress" />

describe('orangeTestSuite', () => {
    it('accessOrangeHomePage', () => {
        cy.visit('/')       
    });

    it('verifyOrangeUrl', () => {
        cy.visit('/',{timeout:80000})
        cy.url().should('include', 'orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/')        
    });

    it('verifyOrnageTitle', () => {
        cy.visit('/')
        cy.title().should('include', 'HRM')   
        cy.title().should('eq','OrangeHRM')     
    });

    xit('loginOrange', () => {
        cy.visit('/')
        cy.login('Admin','admin123')
      //  cy.get('#txtUsername').type('admin').should('have.value','admin')
      //  cy.get('input[name="txtPassword"]').type('admin')
      //  cy.get('input[value="LOGIN"]').click()
       // cy.get('.button').click()
       // cy.get('#spanMessage').should('have.text','Invalid credentials')
    });

    xit('verifyResponseHeaders', () => {
        //cy.request('https://opensource-demo.orangehrmlive.com')
        //cy.request.length.should().co
       cy.xpath(/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[2]/input).type('Ziaullah')


    })
});