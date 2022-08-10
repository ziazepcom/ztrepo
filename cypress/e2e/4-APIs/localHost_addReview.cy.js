/// <reference types = 'Cypress' />

describe('localHost3333AddReview', () => {

    it('addReview', () => {
        cy.request(
            {
                method    :   'POST',
                url         :   'http://localhost:3333/Reviews',
                body        :
                {
                    'id'        :   2,
                    'rating'    :   4,
                    'comment'   :   'Revew 2 for Product id 1',
                    'productID' :   1
                }
               /* {
                    'id'        :   1,
                    'rating'    :   3,
                    'comment'   :   'Revew id 1 of product 1',
                    'productID' :   1
                }*/
            }
        )
     });
});