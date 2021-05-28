/// <reference types ="Cypress" />

describe('UIElement', function(){

    it('verfiy inputbox and radio button', function(){

        cy.visit('http://newtours.demoaut.com/') //go to webpage
        //verify url
        cy.url().should('include', 'newtours') //url should include newtours 
        //username box
        cy.get('[name=userName]').should('be.visible').should('be.enable').type('mercury')
        cy.get('[name=password]').should('be.visible').should('be.enable').type('mercury')
        cy.get('[name=login]').should('be.visible').click() 
        //get tittle 
        cy.tittle().should('eq', 'expected title here') //verification
// check visibelity of element 
//radiobutton visibility and checked 
    //getElement+should('be.visibile).should('be.checked')
    //not selected/checked
    //getElement+should('be.visibile).should('be.checked')
   // like if statement  if not checked click
   //getElement+should('be.visibile).should('be.checked').click()
   //while you are testing you can verify some like efore click isit visible 
  //elelemnt.shoul('be.visible').click()
  

    

    })
})