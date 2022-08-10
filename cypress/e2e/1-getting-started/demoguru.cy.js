describe('demoGuruSuite', () => {

    it('accessPage', () => {
        cy.visit('demo.guru99.com/test/simple_context_menu.html')    
        cy.contains('right click me').rightclick()       
    });

    it('dbclick', () => {
        //cy.visit('demo.guru99.com/test/simple_context_menu.html') 
        cy.on('window:alert', (str)=>{
            expect(str).to.be.equal('You double clicked me.. Thank You..')
        }) 
        cy.wait(8000)
        cy.reload()
        cy.contains('Double-Click Me To See Alert').dblclick()
    });
});