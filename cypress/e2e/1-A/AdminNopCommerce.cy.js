describe('demo.nopcommerce.com', () => {
    //https://admin-demo.nopcommerce.com/login        url for the suite
    
before(function(){          // login using customcommand
   cy.nopcomLogin('https://admin-demo.nopcommerce.com/login','admin@yourstore.com','admin')    
})
    
it('Path verification', () => {        
    cy.location('pathname').should('eq','/admin/')             
});

it('Protocoal Verification', () => {        
    cy.location('protocol').should('eq','https:')                   
});

it('URL Verification', () => {        
    cy.url().should('eq','https://admin-demo.nopcommerce.com/admin/')  
});

it('Port Verification', () => {        
    cy.location('port').should('eq','')  
});
});