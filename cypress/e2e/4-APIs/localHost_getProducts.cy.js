/// <reference types = 'Cypress' />

describe('localHost3333GetProducts', () => {

    it('getProducts', () => {
        cy.request(
                    {
                        method: 'GET',
                        url   : 'http://localhost:3333/Products?_page=1&_limit=3'
                    }
                   )
                .then(
                    (res)=>{cy.log(JSON.stringify(res)
                        )
                })     
    });
});