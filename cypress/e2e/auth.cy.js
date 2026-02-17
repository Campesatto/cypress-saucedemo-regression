describe('Regression Suite - Authentication', () => {

  it('Should login successfully with valid credentials', () => {
    cy.loginSauce()

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Should display error message with invalid credentials', () => {
    cy.loginSauce('standard_user', 'wrong_password')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('Should logout successfully', () => {
    cy.loginSauce()

    cy.get('#react-burger-menu-btn').click()
    cy.contains('Logout').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

})

