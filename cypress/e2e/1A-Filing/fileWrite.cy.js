
// Test suite for filing test cases.
describe('suiteFILING', () => {

    // Test case 1, create an empty text file on specified path.
    it('createFile', () => {

        cy.writeFile('Cypress/fixtures/TestCase.txt','aaa')
        .should('exist').and('contain','aaa') 
        })
    // cy.request('/').then(res=>{cy.writeFile('cypress/fixture/myfile3.txt',res.body)    })        
});