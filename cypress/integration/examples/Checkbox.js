
describe('Chekbox testing and dropdown', function(){

    it('test case', function(){
        
        cy.visit('http://demo.automationtesting.in/Register.html')
//to checkes check box 
        cy.get('#checkbox1').check().should('be.checked').and('has.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('has.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('has.value','Hockey')
//to uncheck checkbox
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
//check chkeck box in a single line
//get common one and put value in array
        cy.get('[type=checkbox]').check(['Cricket','Hockey'])

    })

    it('Dropwown', function(){
        cy.get('#Skills').select('Android').should('have.value','Android')
    })
//multiselect dropdown
    it('Multi select', function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Turkish').click()

    })
//different type of dropdown (click -type -enter)
    it('DD menu', function(){
        //it failing bcz other element is covering the element which i want to do action
        //so to avoid this failing i have to click forcefully
      //  cy.get('input[role=combobox]').click()
        cy.get('[role=combobox]').click({force:true})
        cy.get('.select2-search__field').type('Ind').type('{enter}')
        
    })
})