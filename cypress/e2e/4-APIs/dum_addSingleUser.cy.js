/// <reference types = 'Cypress' />

describe('dummyAPIaddition', () => {
   //Cypress.config('baseUrl','https://dummy.restapiexample.com/api/v1/create')

    it('dumaddSingleUser', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','https://dummy.restapiexample.com/api/v1/create',item).then((res)=>{
            expect(res.status).to.eq(200)
        })
    });
});