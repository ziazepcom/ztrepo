/// <reference types="Cypress" />

describe('suiteFireFox', () => {

    it('accessFFHPage', () => {
        cy.visit('https://www.mozilla.org/en-US/')
        let bt = cy.get('[data-cta-text="Sign up for Pocket"]')
        expect(bt, '').include('Sign up')
        expect(bt,'Button Text').eq(' Sign up for pocket ')
    });
}); 