describe('Cross Domain Suites', () => {

    it('Test with 3 different urls', () => {
        cy.visit('https://www.dell.com/')

        cy.origin('https://www.bbc.com/',()=>{

        })

        cy.origin('https://robertguss.auth0.com/',()=>{

        })
        
    });
});