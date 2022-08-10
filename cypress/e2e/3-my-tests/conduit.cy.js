/// <reference types="Cypress" />
describe('suiteConduit', () => {
    it('before', () => {
        cy.visit('/', {timeout:30000})
        cy.contains('conduit').should('be.visible')
       
    });

    xit('verifyPort', () => {
        cy.location().should((location) => {
           // expect(location.hash).to.be.empty
           // expect(location.href).to.eq('https://example.cypress.io/commands/location')
          //  expect(location.host).to.eq('example.cypress.io')
         //   expect(location.hostname).to.eq('example.cypress.io')
         //   expect(location.origin).to.eq('https://example.cypress.io')
         //   expect(location.pathname).to.eq('/commands/location')
            expect(location.port).to.eq('80')
          //  expect(location.protocol).to.eq('https:')
         //   expect(location.search).to.be.empty
          })
       // cy.location('port').should('eq',80)
    });

    it('verifyCTitle',() => {
        cy.title()
        cy.title().should('eq','Conduit')
    })

    it('verifyCHProtocoal',() =>{
        cy.location('protocol').should('eq','https:')
    })   
});


describe('suitLogin', () => {
    xit('accessLoginPage', () => {
        cy.visit('https://react-reduc.realworld.io/')

    });

    it('accessSign in', () => {
        cy.get('a').contains('Sign in').click()
    });

    it('loginToSite', () => {
        cy.get('input[type="email"]').type('qamilestone.academy@gmail.com')
        cy.get('input[type="Password"]').type('admin123')
        cy.get('button[type="Submit"').should('be.visible').click()
    });
});