/// <reference types = 'Cypress' />

describe('gitGet', () => {

    it('ggetProduct', () => {
       cy.request({
            method  :   'GET',
            url     :   'https://my-json-server/typicode.com/ziazepcom/zepapi/products/10'                        
            })
    });
});