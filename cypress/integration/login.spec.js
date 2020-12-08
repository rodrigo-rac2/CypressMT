const validUsername = Cypress.env('username')
const validPassword = Cypress.env('password')

describe("Login Tests", function () {

    beforeEach(function (){
        cy.visit('/')
      })

    it('Should allow users to successfully login', function () {
        cy.get('#login-username').type(validUsername)
        cy.get('#login-password').type(validPassword)
        cy.get('#sign-in-button').click()
        cy.get('#topMenu > .my-profile > .md-customTheme-theme').contains('My Profile')
    })
    it('Should not allow users access without a valid password', function () {
        cy.get('#login-username').type(validUsername)
        cy.get('#login-password').type('test')
        cy.get('#sign-in-button').click()
        cy.get('#userLoginForm > .gpalert > .ng-binding').contains('The given password is wrong. Please try again.')
    })
    it('Should not allow users access without a valid email', function() {
        cy.get('#login-username').type('test12234@test.com')
        cy.get('#login-password').type('test')
        cy.get('#sign-in-button').click()
        cy.get('#userLoginForm > .gpalert > .ng-binding').contains('We could not match that username and password with anybody on our system. Please try again.')
    })
    it('Should not allow users to access the site without a valid username', function () {
        cy.get('#login-username').type('test123')
        cy.get('#login-password').type('test')
        cy.get('#sign-in-button').click()
        cy.get('#userLoginForm > .gpalert > .ng-binding').contains('We could not match that username and password with anybody on our system. Please try again.')
    })
})