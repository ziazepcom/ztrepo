/// <reference types = 'cypress' />

describe('localhostSuite', () => {

    it('TraversAllListItesm', () => {        
        cy.visit('/')
        cy.get('.mdiv').its('width').should('eq','700pm')
       // cy.get('.ldive #ldt #a1 li').should('have.length',5)
      //  cy.get('#a1').should('have.a.prop','name').and('have.value','SaeenTribes')
       /* cy.get("#a1[li*]").each((item,index,list)=>{console.log(list)})*/
    })
    it('accessHomePage', () => {
        cy.visit('localhost')
        cy.wait(8000)
       // cy.location('port',{timeout:15000}).should('eq','80')
       
       // cy.get('.mdiv #mhead').should('contain','Details Here').screenshot()
        cy.get('div>span>ul>li:nth-child(4)>a').click()
        //cy.get('.ldiv>  #mhead').should('contain','Samatt Tribes') .screenshot()
       // cy.get('.ldiv  h2:last').should('contain', 'Sindhi Clains') .screenshot()
      //  cy.get('.rdiv  #mhead').should('contain', 'Mehran Culture') .screenshot()
       /* cy.get('#ldt').type('{tab}')
        cy.wait(5000)
        cy.type('{tab}')
        cy.wait(5000)
        cy.type('{tab}')*/        
    });
});