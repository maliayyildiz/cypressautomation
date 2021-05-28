
describe('E2E testing', function(){

    it('shopping', function(){
    cy.visit('https://demo.nopcommerce.com/')
//search items
    cy.get('#small-searchterms').type('Apple MAcBook Pro 13-inch') //Apple MAcBook Pro 13-inch
//click search button
    cy.get('#small-search-box-form > .button-1').click()
//click add to crt button
    cy.get('.product-box-add-to-cart-button').click()
//provide quantity as 2
    cy.get('#product_enteredQuantity_4').clear();
    cy.get('#product_enteredQuantity_4').type('2')
//click add to cart button
    cy.get('#add-to-cart-button-4').click()
//go to shopping cart
    cy.get('.cart-label').click();
// verify price 1800$
    cy.get('.product-unit-price').contains('$1,800.00')



})

})