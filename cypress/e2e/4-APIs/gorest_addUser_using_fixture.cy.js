/// <reference types="Cypress" />

describe('suite_gorest_fAUAPI', () => {

    let accessToken = '2c55b9e3e28a2e5dbd9502a770f25a35cab1de9d59ab05031a989cc93e4c0b8c'   

    it('addUserfixture', () => {

        cy.fixture('gorest').then((fixvar)=>{     

        cy.request({
            method      :   'POST',
            url         :   'https://gorest.co.in/public/v2/users',
            headers     :   {
                            Authorization    : 'Bearer' + accessToken
                            },

            body        :   {
                            'Name'  :  fixvar.name,
                            'Email' :  fixvar.email,
                            'Gender':  fixvar.gender,
                            'Status':  fixvar.status
                            }
        }).then((res)=>{

            cy.log(JSOn.stringify(res))
            expect(res.statu).to.eq(201)
            expext(res.body).has.property('Name','John Smith')
            expext(res.body).has.property('Gender','Male')
            expext(res.body).has.property('Email','test@test.com')
            expext(res.body).has.property('Status','active')
        }).then((res) =>{
            const userid = res.body.data.userid
            cy.log('Newly created user id is = ' + userid)
        })
    })
})
})