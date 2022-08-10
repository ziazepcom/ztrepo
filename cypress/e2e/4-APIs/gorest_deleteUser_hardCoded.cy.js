/// <reference types="Cypress" />

describe('', () => {

    let accessToken = 'ffae542bdafc91250ad3d4e1cf3f50b07a033963cbe438a83f34a6cd9981ef8a'                    

    it('deleteUserhardCoded', () => {
        cy.request({
            method      :   'DELETE',
            url         :   'https://gorest.co.in/public/v2/users/4631',
            headers     :   {
                            'Authorization' : 'Bearer ' + accessToken
                            } 
        }).then((res)=>{
            expect(res.status).to.eq(204)
            cy.log(JSON.stringify(res))
            //expect(res.body).has.property('meta',null)
        })
    });
});