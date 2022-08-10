/// <reference types = "Cypress" />

describe('gorest_getUserAPI', () => {
    let accessToken = 'ffae542bdafc91250ad3d4e1cf3f50b07a033963cbe438a83f34a6cd9981ef8a'

    it('ccc', () => {
       // cy.grDeleteSingleUser()
       // cy.grgetAllUsers()  
      //  cy.grgetSingleUser()
        cy.grAddSingleUser()
    
    });

    xit('getAllUsers', () => {
        cy.request(
            {
            method  :   'GET',
            url     :   'https://gorest.co.in/public/v2/users',
            headers :   { 
                        'Authorization' : 'Bearer' + accessToken
                        }
            }
             ).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).to.have.length(20)
               // expect(res.server).to.eq('nginx')
               // expect(res.headers.content-encoding).to.eq('gzip')
        })        
    });

    xit('getUserById', () => {
        cy.request({
            method  :'GET',
            url     : 'https://gorest.co.in/public/v2/users/3136',
            headers : {
                    'Authorization' : 'Bearer'+accessToken}
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name','Bharat Arora')
            expect(res.body).has.property('status','active')
           // expect(res.body).encoding.has('gzip')
           // assert(res.headers.encoding).to.eq('gzip')
        })        
    });
});