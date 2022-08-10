describe('testsuite2', () => {

    it('file', () => {
        
        cy.origin('https://www.dell.com', ()=>{
            cy.visit('/')
            cy.title().should('include','Computers, Monitors')
        })
        cy.origin('https://www.google.com', ()=>{
            cy.visit('/')
            cy.title().should('eq','Google')
        })
       //cy.location('protocol').should('eq','http:')
       //cy.origin('https://www.yahoo.com', ()=>{
        //    cy.visit('/')
        //    cy.title().should('include','Yahoo | Mail, Weather, Search,')
       // })
       
        
    });
});