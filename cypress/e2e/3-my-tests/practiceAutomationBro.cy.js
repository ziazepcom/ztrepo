/// <reference types = 'Cypress' />
// https://practice.automationbro.com

describe('sutePABro', () => {

    it('accessHomePage', () => {
        cy.visit('/')
        cy.get('#primary-menu')
            console.log(length())       
    });
});