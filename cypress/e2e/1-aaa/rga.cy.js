const { verify } = require("cypress/lib/exec/xvfb");

//https://www.robertguss.auth0.com/login
describe('MultiOriginSuite', () => {
    beforeEach(() => {
        cy.login(Cyress.env('email'),Cypress.env('password'));
    });


    it('startRavigating', () => {
        cy.visit('https://wwww.yahoo.com/')
        cy.origin('https://robertguss.auth0.com/', () => {
            cy.get('#a-email').type(Cypres.env('email'));
            cy.get('input[type="password"]').type(Cypress.env('passwrod'));
            cy.get('button[type="submitt"]').click();

        })
    });
});