
describe('MySuit', function(){

    it('custom command', function(){
       cy.login('admin@yourstore.com','admin')
       cy.title().should('eq','Dashboard / nopCommerce administration')
       
       cy.login('admin@yourstore.com','admin1') //invalid password
       cy.title().should('eq','Your store. Login')

       cy.login('admin@yourstore.com1','admin')//invalid email
       cy.title().should('eq','Your store. Login')
    })

    it('add customer', function(){
        cy.login('admin@yourstore.com','admin')
        cy. log('Add')


    })

    it('edit customer', function(){
        cy.login('admin@yourstore.com','admin')

        cy.log('Edit')
    })

    it('Delete customer', function(){
        cy.login('admin@yourstore.com','admin')

        cy.log('Delete')
    })
})