const { contains } = require("cypress/types/lodash/fp");

describe('iframe2Suite', () => {
    //https://selenium.docs/

    it('accessiFramePage', () => {
        cy.visit('/selenium/docs/api/java/index.html?overview-summary.html')
        cy.get('[name="classFrame"]').find('org.openqa.selenium.cli').click()
    })
});