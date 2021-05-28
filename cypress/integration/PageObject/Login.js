class LoginPage
{
visit()
{
    cy.visit('https://admin-demo.nopcommerce.com/login')
}

fillEmail(value)
{
const field = cy.get('#Email')
field.clear()
field.type(value)
return this
//this presenting this class
}

fillpassword(value)
{
    const field = cy.get('#Password')
    field.clear()
    field.type(value)
    return this
}

submit()
{
    const button = cy.get('[type=submit]')
    button.click()
}

}
//we have to export the class to use other class
export default LoginPage