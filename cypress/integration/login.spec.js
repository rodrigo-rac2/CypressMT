const loginData = require('../support/pageData/login')
const validUsername = Cypress.env('username')
const validPassword = Cypress.env('password')

describe("Login Tests", function () {

    beforeEach(function (){
        cy.visit('/')
      })

    it('Should allow users to successfully login', function () {
        loginData.enterLoginDetails(validUsername, validPassword)
        cy.get('#topMenu > .my-profile > .md-customTheme-theme').contains('My Profile')
    })
    it('Should not allow users access without a valid password', function () {
        loginData.enterLoginDetails(validUsername, 'test')
        cy.get(loginData.elements.errorTextField).contains('The given password is wrong. Please try again.')
    })
    it('Should not allow users access without a valid email', function() {
        loginData.enterLoginDetails('test1234567@test.com', 'test')
        cy.get(loginData.elements.errorTextField).contains('We could not match that username and password with anybody on our system. Please try again.')
    })
    it('Should not allow users to access the site without a valid username', function () {
        loginData.enterLoginDetails('test1234567', 'test')
        cy.get(loginData.elements.errorTextField).contains('We could not match that username and password with anybody on our system. Please try again.')
    })
})