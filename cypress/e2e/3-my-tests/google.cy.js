/// <reference types="Cypress" />
// test suite for google home page.
describe('googleHomePage',function(){

   // test method which will be executed only once before any test executed in this test suite.
   /*xbefore(() => {
        cy.visit('/')
        cy.exec('npm cache clear --force')
   });

   // test method which will be executed after before method above but before every test method in this suite
    xbeforeEach(() => {      
        cy.visit('https://www.google.com/')
     })*/

   it('accessHomePage', () => {
      // open the site's home page which is already mentioned in the baseUrl in cypress.config.js file
         cy.visit('/')
     })

   it('verifyProtocal',() => {       
      // verify the request method as https  
         cy.location('protocol').should('eq','https:')         
     })

   it('findAndVerifyHomePageLogo', () => {
      // verify the Google logo at home page by using the CSS attribute=value technique
         cy.get('[src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"]').should('be.visible')
     });

     // find the seach input box using the CSS attribute-value technique
   xit('findSearchInputBox', () => {
         cy.get('[name="q"]').type('Cypress Locators').type('{enter}')
     });
    
   xit('elementindiv', () => {
      })
               
   xit('veryPort', () => {
        cy.location('port').should('eq','80')        
     });

   xit('veryStatus',() => {
        cy.location().its().ret
     })
   
   xit('verifyURL', () => {
        cy.url().should('eq','https://www.google.com/')
    });

   xit('mouseHover', () => {
       cy.get('a').contains('Gmail').trigger('mouseover')
    });
      
   xit('clickSindhi', () => {
       cy.get('a').contains('سنڌي').trigger('mouseover')
    });

});