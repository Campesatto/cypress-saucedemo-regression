describe('Regression Suite - Cart', () => {

  beforeEach(() => {
    cy.loginSauce()
  })

  it('Should add one product to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')

    cy.get('.shopping_cart_link').click()

    cy.contains('Your Cart').should('be.visible')
    cy.get('.cart_item').should('have.length', 1)
  })

  it('Should remove product from the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('not.exist')

    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 0)
  })

  it('Should keep cart state after page reload', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.reload()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')
  })

})
