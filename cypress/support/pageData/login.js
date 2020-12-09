module.exports ={
    elements: {
        usernameField: '#login-username',
        passwordField: '#login-password',
        submitBtn: '#sign-in-button',
        errorTextField: '#userLoginForm > .gpalert > .ng-binding'
    },
    enterLoginDetails: function(username, password) {
        cy.get(this.elements.usernameField).type(username)
        cy.get(this.elements.passwordField).type(password)
        cy.get(this.elements.submitBtn).click()
    }
}