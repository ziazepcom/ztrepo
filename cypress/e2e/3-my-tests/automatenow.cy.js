/// <reference types="Cypress" />

describe('accessAmNowURL', () => {
    it('AANURL', () => {
        //https://automatenow.io/'
        cy.visit('/')
        expect(true).to.be.true
      const o = { foo: 'bar' }

      expect(o).to.equal(o)
      expect(o).to.deep.equal({ foo: 'bar' })
      // matching text using regular expression
      expect('FooBar').to.match(/bar$/i)
       // cy.get('.nav-menu-item-inside', {multiple: true}).should('eq','Training')
       // expect(ptitle).to.have.text('Training')
      //  cy.get('.nav-menu-item-inside')
     //   expect('.nav-menu-item-inside').to.deep.equal('Training')
       // expect().to.be.equal('automateNow')
    });
});