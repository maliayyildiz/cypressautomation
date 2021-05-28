
/// <reference types ="cypress" />


describe('MyTestSuit', function(){

    before(function(){

        //we ll load fixture file

        cy.fixture('new').then(function(data){
            //normally yoo can not use 'data' outside of this block but
            //when we this keyword it blongs to class so
            //trough this keyword you can use in other blocks
            this.data = data
        })

    })

    it('FixtureDemoTest', function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.get('#Email').clear().type(this.data.email)

        cy.get('#Password').clear().type(this.data.password)

        cy.get('[type=submit]').click()

    })
})