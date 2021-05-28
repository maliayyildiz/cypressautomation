 /// <reference types = "cypress" />

 describe('MyTestSuite', function(){
     it('Navigations', function(){
        cy.visit('https://demo.nopcommerce.com/')

        cy.title().should('eq','nopCommerce demo store')

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register')
        //go() navigate
        //navigate back and verify title
        cy.go('back')  //cy.go(-1)
        cy.title().should('eq','nopCommerce demo store')
        //navigate forward and verify title
        cy.go('forward') //cy.go(1)
        cy.title().should('eq','nopCommerce demo store. Register')

        //refresh
        cy.reload()
        cy.title().should('eq','nopCommerce demo store. Register')

     })
 })

