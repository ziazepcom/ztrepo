/// <reference types="Cypress" />

require('../../gorest_adduser.json')

describe('gorest_rAUAPI', () => {

    let accessToken = 'ffae542bdafc91250ad3d4e1cf3f50b07a033963cbe438a83f34a6cd9981ef8a'
    //2c55b9e3e28a2e5dbd9502a770f25a35cab1de9d59ab05031a989cc93e4c0b8c' OLD TOKEN

    it('addUserrequire', () => {       

        cy.request({
            method      :   'POST',
            url         :   'https://gorest.co.in/public/v2/users',
            headers     :   {
                            Authorization    : 'Bearer ' + accessToken
                            },

            body        :   {
                            'name'  :  name,
                            'email' :  email,
                            'gender':  gender,
                            'status':  status
                            }
        }).then((res)=>{

            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name',reqvar)
            expect(res.body).has.property('email',reqvar)
            expect(res.body).has.property('gender',reqvar)
            expect(res.body).has.property('status',reqvar)
            expect(res.headers).has.property('server','nginx') 
        })
     });
});