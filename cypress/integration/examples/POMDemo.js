import LoginPage from "../PageObject/Login";

describe('Test suit', function(){

it('Pom', function(){

    const lp = new LoginPage()
    lp.visit()
    lp.fillEmail('admin@yourstore.com')
    lp.fillpassword('admin')
    lp.submit()

    cy.title().should('eq','Dashboard / nopCommerce administration')
})

})