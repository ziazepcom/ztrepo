describe('Filereading', () => {

    it('FileRead', () => {
        cy.log('File Reading has started....')
        console.log('file read initiated.....')
        const mf = cy.readFile('usersList.csv')
        
    });
});