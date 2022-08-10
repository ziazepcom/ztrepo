/// <reference types = 'Cypress' />

describe('LHost3333', () => {
    //Cypress.config('baseUrl','https://dummy.restapiexample.com/api/v1/create')
 
     it('LHamrecords', () => {
        cy.request({
            method: 'POST',
            url:    'http://localhost:3333/profile',
            body:   
            {   
                "name": "Senior Developer"
            }                     
        })             
    })
});