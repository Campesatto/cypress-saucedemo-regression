Cypress.Commands.add('loginSauce', (user = 'standard_user', pass = 'secret_sauce') => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').clear().type(user)
  cy.get('#password').clear().type(pass)
  cy.get('#login-button').click()
})
