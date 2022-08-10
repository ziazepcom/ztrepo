/// <reference types="Cypress" />
// https://demoqa.com
//const { identity } = require("cypress/types/lodash");

describe('suite DemoQA-RadioButton', () => {

    it('beforeEach', () => {
        cy.visit('/')        
    });

    it('checkLenght', () => {       
        cy.log('-- Length Check')
        cy.get('input[type="radio"]').should('have.length',3)    
    });

    it('checkClass', () => {
        cy.log('-- Class Check')
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled')
    });

    it('checkExist', () => {  
        cy.log('-- Exist Check')
        cy.get('.mt-3').should('not.exist')
    });

    it('checkText', () => {
        cy.log('-- Text Check')
        cy.get('input[type="radio"]').eq(0).click()
    });
});