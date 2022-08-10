/// <reference types="Cypress" />

describe('yahooSuite', () => {

    it.only('usingWithin', () => {
        cy.visit('/') 
        cy.get('.mh-top-nav-button .mh-top-nav-button span').contains('APEX').invoke('show')
       // cy.get('span').contains('APEX').trigger('mouseover')
       // cy.contains('APEX').find('APEX Console').click()       

        //cy.get(':nth-child(1) > .mh-top-nav-button').trigger('mouseover')
       // cy.get('.mh-bottom non-commerce .flyoutOverlay .unified-masthead-navigation .mh-top-nav .mh-top-menu-nav aria-nav .mh-top-menu child-nav').click()
        //cy.get('nth-child(1) > .mh-top-nav-button > span').trigger('mouseover')
       // cy.get('a span').contains('APEX').click()
        //cy.contains('About Us').click()
        //trigger('mouseover')
        
        //cy.get('ybarMailLink').within(()=>{  cy.get('#root_1') })    
    });

    it('accessYahooHomePage', () => {
        cy.visit('/')       
    });

    it('verifyProtocol', () => {
        cy.location('protocol').should('eq','https:')     
    });

    it('verifyTitle', () => {
        cy.title().should('eq','Computers, Monitors & Technology Solutions | Dell Pakistan')
    });

    it('verifyURL', () => {
        
        cy.url().should('include','https://www.dell.com/')
    });

    xit('verifyHash', () => {
        cy.location('hash').should('include','#/abc')
        cy.hash().should('include','#/abc')
    });

    it('pageNavigation', () => {
        cy.contains('Contact Us').click()    
        cy.wait(8000)
        //cy.go('back') 
        cy.scrollIntoView('Support Home').click()
        cy.wait(8000)
        cy.go(-1)
    });

});