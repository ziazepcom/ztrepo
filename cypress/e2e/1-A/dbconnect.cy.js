describe('DatabaseConnection', () => {
    
  it('Create a Table', function () {
    //*************** reading data from cypress.env.json file */
    Cypress.env('NewVariable', 'NewValue')

    cy.visit(Cypress.env('orul'))
    cy.get('#txtUsername').type(Cypress.env('ouid'))
    cy.get('#txtPassword').type(Cypress.env('opwd'))
    cy.get('#btnLogin').click()

    //************** reading data from cypress env variables from cypress.config.js file 
    //cy.visit(Cypress.env('msn'))
   // cy.get(Cypress.env('fsb')).type('new text from cypress code').type('{enter}')
    //cy.get('[name=q]').type('abcd')
    //console.log(dvh)
    //cy.log(dvh)
   // cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
})

xit('Input Entries into the table', function () {
  cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
  (001, "John", "House No. 01", "Helsinki"),
  (002, "Pam", "House No. 02", "Espoo"),
  (003, "Dwight", "House No. 03", "Lapland"),
  (004, "Michael", "House No. 04", "Vantaa");`).then((result) => {
          expect(result.affectedRows).to.equal(4)
      })
})
xit('Update an Entry into the table and verify', function () {
  cy.task('queryDb', `UPDATE Persons SET FirstName = "Kevin" WHERE City="Vantaa"`).then((result) => {
      expect(result.changedRows).to.equal(1)
  })
  cy.task('queryDb', `SELECT FirstName FROM Persons WHERE City="Vantaa"`).then((result) => {
      expect(result[0].FirstName).to.equal('Kevin')
  })
  xit('Verify that there is only one row where the city is Espoo', function () {
    cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="Espoo"`).then((result) => {

        expect(result[0].rowCount).to.equal(1)
    })
})
xit('Delete a Table and Verify', function () {
  cy.task('queryDb', `DROP TABLE Persons`).then((result) => {
      expect(result.message).to.equal("")
  })
})
})

});