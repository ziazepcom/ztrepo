// https://demo.nopcommerce.com/

describe('demoNopCommerceSuite', () => {

    it('accessDNCHomePage', () => {
        cy.visit('https://demo.nopcommerce.com')   // access the application home page       
    });

    // click on the Jewelery link
    it('click on Jewelry link',()=>{
        cy.get('.master-wrapper-page>div:nth-child(2)>ul>li:nth-child(6)>a').contains('Jewelry').click({force:true})

        cy.scrollTo(0,700)

        cy.contains('Flower Girl Bracelet').click()

        cy.get('#product_enteredQuantity_41').clear().type(2)

        cy.get('#add-to-cart-button-41').click()

        cy.wait(2000)

        .contains('The product has been added to your ')

        cy.contains('Shopping cart').click()

        cy.contains('Total:')

        cy.contains('$720.00')

        cy.contains(' Checkout ').click()             
    })

    xit('locateRegisterButton', () => {
        cy.get('[href="/register?returnUrl=%2F"]').click()        // locate register button by attribute value as '[href="/register?returnUrl=%2F"]'
        //cy.get('.ico-register').click()                           // locate register button by class as '.ico-register'             
       //cy.contains('Register').click()                             // locate register button by contains text as 'Resiger'
    });
    

    xit('locateLoginButton', () => {
        //cy.contains('Log in').click()                              // locate login button by contains text 'Log in'
        //cy.get('.ico-login').click()                               // locate login button by class as '.ico-login'
        cy.get('[href="/login?returnUrl=%2F"]').click()              // locate login button by attribute and value as '[href="/login?returnUrl=%2F"]'
    });
    xit('locateSearchBox', () => {
        //cy.get('#small-searchterms').clear().type('iPhone')       // locate the search box by id
        //cy.get('.search-box-text').clear().type('Samsung')        // locate the search box by class      
        //cy.get('[name=q]').clear().type('dell computer')       // locate the search box by attribute and value as name=q
        //cy.get('[aria-label="Search store"]').type('new search').click() // locate the search box by attribute and value as aria-label=Search store
        cy.get('[autocomplete=off]').type('Nikon D5500 DSLR')               // locate the search box by attribute and value as autocomplte=off
        
        cy.get('[type=submit]').click()               // locate the submit button by attribute value as type=submit
    });

    xit('locateSearchBox', () => {
        cy.get('#small-searchterms') // locate the search box by id
        .clear()                     // clear the current contes of the search box
        .type('Apple MacBook Pro 13-inch')     // enter new value in the search box  
        cy.get('button[type=submit]').click()
    });

    xit('locateSearchButton', () => {
        cy.get("button[type='submit']") // locate the search button by tag[attribute=value]
        .click()                         // click on the button           
    });

    xit('locateAddToCartButton', () => {
        cy.get('button.product-box-add-to-cart-button')    // locate the Add to Cart buton by tag and button text
        .click()                                    // click on the buton 
    });

    xit('locateAddToCartButton', () => {
        cy.get('button.product-box-add-to-cart-button')
        .click()      
        //cy.get('.ico-login').click()
    });
 });