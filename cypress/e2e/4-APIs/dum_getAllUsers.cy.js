/// <reference types = 'Cypress' />

describe('dummyAPIGet', () => {

    it('dumgetAllUsers', () => {

        cy.request('https://dummy.restapiexample.com/api/v1/employees').then((res)=>{
           expect(res.status).to.eq(200)
           expect(res.headers).has.property('content-encoding', 'gzip')
        })       
    })
})
