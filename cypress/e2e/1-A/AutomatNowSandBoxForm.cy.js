describe('autoPracticeSuite', () => {

    it('getHomePage', () => {
        cy.visit('https://automatenow.io/sandbox-automation-testing-practice-website/form-field')
        cy.get('#g1103-inputfield').type('hi')
        cy.get('a').contains('Form Fields').click()
        cy.get('[type="checkbox"]').check('option 3', {force:true})
   });   
});