/// <reference types = 'Cypress' />

describe('localHost3333UpdateProduct', () => {

    it('update', () => {
        cy.request(
            {
                method: 'DELETE',
                url   : 'http://localhost:3333/Products/11'                           
            }
        )
    });
});