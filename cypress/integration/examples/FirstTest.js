
describe('My first Test', function(){
    it('Verify Title of thr page - positive', function(){
       cy.visit('https://demo.nopcommerce.com/')
       //tittle
       cy.title().should('eq','nopCommerce demo store')
        
    })

    it('Verify Title of thr page - negative', function(){
        cy.visit('https://demo.nopcommerce.com/')
        //tittle
        cy.title().should('eq','nopCommerce demo')
         
     })
})