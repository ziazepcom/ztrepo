describe('test against Spanish content',{env:{language: 'es'}},()=>
    {
    it('displays Spanish', () =>{
        cy.visit("https://docs.cypress.io/${Cypress.env('langauge')}/")
        cy.contains('Por que Cypress?')
    })
})