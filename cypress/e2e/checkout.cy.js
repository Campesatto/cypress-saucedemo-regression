describe('Regression Suite - Checkout', () => {

  beforeEach(() => {
    cy.loginSauce()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
  })

  it('Should complete checkout successfully', () => {
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Vitor')
    cy.get('[data-test="lastName"]').type('Campesato')
    cy.get('[data-test="postalCode"]').type('32839')

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

    cy.contains('Thank you for your order!').should('be.visible')
  })

  it('Should show error when required fields are missing', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error')
  })

})
