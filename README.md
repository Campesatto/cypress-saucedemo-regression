# Cypress SauceDemo Regression Suite

This project contains an end-to-end regression test suite built with **Cypress** for the SauceDemo application.

The goal of this project is to demonstrate practical automation testing skills, including:

- Authentication validation
- Cart functionality
- Checkout flow
- Positive and negative test scenarios
- Regression strategy
- Continuous Integration (CI) setup

---

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions (CI)
- Mochawesome Reporting


---

## Project Structure

cypress/
e2e/
auth.cy.js
cart.cy.js
checkout.cy.js
fixtures/
support/
.github/
workflows/
cypress.yml


---


---

## 🧪 Test Coverage

### Authentication
- Successful login
- Invalid credentials validation
- Logout functionality

### Cart
- Add product to cart
- Remove product from cart
- Cart state validation

### Checkout
- Successful checkout flow
- Required fields validation

---

## Continuous Integration

This project is configured with **GitHub Actions**.

On every push to the `main` branch or pull request:

- Dependencies are installed
- Cypress tests run automatically
- Mochawesome reports are generated
- Screenshots and videos (on failure) are uploaded as artifacts

This ensures automated regression validation and continuous quality control.

---

## Reporting

Test execution generates:

- JSON reports
- Merged HTML report (Mochawesome)
- Screenshots on failure
- Execution videos

Artifacts are available in the GitHub Actions workflow logs.










