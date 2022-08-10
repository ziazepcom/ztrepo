/// <reference types="Cypress" />
//https stats code 422 Unprocessable entity.
describe('gorest_hcAUAPI', () => {    
    let accessToken = 'ffae542bdafc91250ad3d4e1cf3f50b07a033963cbe438a83f34a6cd9981ef8a'
    //'2c55b9e3e28a2e5dbd9502a770f25a35cab1de9d59ab05031a989cc93e4c0b8c' OLD TOKEN
   // Variables and function to generate a random email address
   // let randomText = "", let testEmail = ""
                      
    it('addUserhardCoded', () => {

      /*  var pattern = 'tu00'
        for (var i = 0; i<10; i++)
        randomText +=pattern.chartAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@test.com'*/
 
        cy.request({
            method  :   'POST',
            url     :   'https://gorest.co.in/public/v2/users',
            headers :   {
                            'Authorization':'Bearer ' + accessToken
                        },
            body    :
                        {
                        'name'  : 'user 17',   
                        'email' : 'tu0017@test.com',
                        'gender': 'male',
                        'status': 'active'
                        }
                    })         
        .then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','Anthony Dane')
            expect(res.body).has.property('email','tu0017@test.com')
            expect(res.body).has.property('gender','male')
            expect(res.body).has.property('status','active')
            expect(res.headers).has.property('server','nginx')          
        })
    });
});