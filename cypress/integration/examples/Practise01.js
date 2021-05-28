
describe('Practise title, radio button', function(){

    it('test case', function(){
        cy.visit('https://demoqa.com/')

        cy.title().should('eq','ToolsQA')

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()

        cy.get('.col-md-6 > :nth-child(1) > :nth-child(2)').click()

        cy.get('.text-success').should('be.visible');

        cy.get(':nth-child(3) > .custom-control-label').click()

        cy.get('.text-success').should('be.visible');

        cy.get('.custom-control.disabled').should('be.disabled');

    })

})