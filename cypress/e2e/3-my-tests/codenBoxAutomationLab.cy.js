/// <reference types="Cypress" />

describe('suiteCnBALaps', () => {
    //https://codenboxautomationlab.com/
    
    it('accessHomePage', () => {        
        cy.visit('/')
        //s.get('a').should('have.length', 103)
    });

    it('findElementParent', () => {
        // find an element using its parent element
        cy.get('.genericon-search > .search-icon').click()
        // explicit assertion to verifty the element by its link text
      // .should('contain','CodenBox AutomationLab')
    });

    xit('findElementUsingTagNameonly', () => {
        // find an element using its tage name
         cy.get('a')
        // explicit assertion to verifty the element by its link text
       .should('contain','CodenBox AutomationLab')
    });

    xit('findElemen2', () => {
        // Finding an element among multiple type of same element having save properties and attributes using the last keyword
        cy.get('input:last').type('Cypress Locators')
        cy.get('button:last').click()
        // Fomdomg an element amonth 
        // cy.get('#search-2 > #searchform > .search-input').type('This is atlast found')
    });

    xit('visittoaRelativePage', () => {  
        // visiting a relative page on the base url      
        cy.visit('/practice')                     
    });

    xit('clickonAButon', () => {  
        // Find a button and click on it using css id attribue        
       // cy.visit('/practice').get('openwindow').click()  
           cy.contains('Open Window').scrollIntoView()                  
    });
    xit('findElementUsingTageNamePropertyValue', () => {
        // find an element using its tage name and propety value
         cy.get('input[name="s"]').type('Found the element')       
    });
    
    xit('verifyHostProtocol', () => {
      cy.visit('/')
      .location('host').should('contain','https:')                   
    });

    xit('scrollPage', () => {        
        cy.visit('/')    
        cy.contains('Contact Us').scrollIntoView()
       // cy.visit('/wp-login.php')               
    });
});