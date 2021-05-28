
/// <reference types = "cypress" />

describe('myTestSuit', function(){
    before(() => {
        cy.log('setup')
      })
    
      beforeEach(() => {
        cy.log('starts before each test')
      })
    
      afterEach(() => {
        cy.log('starts after each test')
      })
    
      after(() => {
        cy.log('Tears down')
      })

    it('Searching', function(){
        cy.log('******This is searching******')
    })

    it('Advance Searching', function(){
        cy.log('******This is advance searching******')
    })

    it('Listig products', function(){
        cy.log('******This is listing products******')
    })
    
})