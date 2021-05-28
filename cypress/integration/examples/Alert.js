

describe('Alert',function(){

    it('Alert', function(){
        cy.visit('http://www.seleniumeasy.com/test/javascript-alert-box-demo.html')

        cy.get(':nth-child(4) > .panel-body > .btn').click()
        //cypress accepst alert automaticly

        //if you want to get text from alert (event actions)
        cy.on('window:alert',(str)=>
        {
           expect(str).to.equal('I am an alert box!')
        })
        //above the syntax that verify alert message in cypress
    })

    it('Confirmation alert', function(){

        cy.get(':nth-child(5) > .panel-body > .btn').click()

        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a button!')
        })
    })

})