/// <reference types = 'Cypress' />

describe('localHost3333AddProduct', () => {

    it('addProduct', () => {
        cy.request(
            {
                method: 'POST',
                url   : 'http://localhost:3333/Products',
                body :
                {
                    'id'        :   5,
                    'title'     :   'Product 5',
                    'category'  :   'fintness',
                    'price'     :    4000,
                    'description':  'This is description about product 5'
                 }
               /*{
                    'id'        :   9,
                    'title'     :   'Product 9',
                    'category'  :   'accessories',
                    'price'     :    4000,
                    'description':  'This is description about product 9'
                 }
                 {
                    'id'        :   8,
                    'title'     :   'Product 8',
                    'category'  :   'furniture',
                    'price'     :    7000,
                    'description':  'This is description about product 8'
                 }
                 {
                    'id'        :   7,
                    'title'     :   'Product 7',
                    'category'  :   'furniture',
                    'price'     :    6000,
                    'description':  'This is description about product 7'
                 }
                {
                    'id'        :   6,
                    'title'     :   'Product 6',
                    'category'  :   'gardning',
                    'price'     :    5000,
                    'description':  'This is description about product 6'
                 }
                {
                    'id'        :   4,
                    'title'     :   'Product 4',
                    'category'  :   'fitness',
                    'price'     :    3000,
                    'description':  'This is description about product 4'
                 }
                {
                    'id'        :   10,
                    'title'     :   'Product 10',
                    'category'  :   'electronics',
                    'price'     :    3000,
                    'description':  'This is description about product 10',
                    'discount'  :  
                        {
                            'type'  :   'shipping'
                        } 
                 }
                {
                    'id'        :   3,
                    'title'     :   'Product 3',
                    'category'  :   'books',
                    'price'     :    1000,
                    'description':  'This is description about product 3'
                 }
                {
                    'id'        :   2,
                    'title'     :   'Product 2',
                    'category'  :   'electronics',
                    'price'     :    2000,
                    'description':  'This is description about product 2'
                 }
                {
                   'id':1,
                    'title':        'Product 1',
                    'category':     'electronics',
                    'price':        4000,
                    'description':  'This is description about product 1'
                }*/
            }
        )
    });
});