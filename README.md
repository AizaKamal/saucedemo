# saucedemo

# SauceDemo Cypress Automation Framework

This project is a Cypress-based automation framework designed to test the core functionalities of [SauceDemo](https://www.saucedemo.com/).  

It demonstrates:  
- Test Automation Framework Design (Page Object Model – POM)  
- Data-driven testing with fixtures  
- Clean, maintainable code practices  
- Automated test coverage for login, product selection, and checkout  

## Project Structure
cypress-automation/
│── cypress/
│   ├── e2e/                # Test cases
│   │   ├── login.cy.js
│   │   ├── product.cy.js
│   │   ├── checkout.cy.js
│   ├── pages/              # Page Object Models
│   │   ├── loginPage.js
│   │   ├── productsPage.js
│   │   ├── checkoutPage.js
│   ├── fixtures/           # Test data
│   │   └── testData.json
│   └── support/            # Cypress support files
│       └── commands.js
│── cypress.config.js       # Cypress configuration
│── package.json
│── README.md

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)  
- npm (comes with Node.js)  

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/AizaKamal/saucedemo.git
   cd saucedemo
2. Install dependencies:
    ``bash
    npm install
3. Open Cypress Test Runner (GUI):
    ```bash
    npx cypress open
4. Run tests in headless mode:
    ```bash
    npx cypress run

## Test Scenarios Covered

🔹 Login & Logout
Verify user can log in with valid credentials.
Verify user can log out successfully.
🔹 Product Selection
Verify user can add a product to the cart.
🔹 Checkout Process
Verify user can complete the checkout process successfully.


## Test Data
Stored in cypress/fixtures/testData.json:
    ```bash
{
  "username": "standard_user",
  "password": "secret_sauce"
}

## Tech Stack
- Framework: Cypress
- Language: JavaScript
- Design Pattern: Page Object Model (POM)

## Sample Command
Run only checkout tests in headless mode:
    ```bash
    npx cypress run --spec "cypress/e2e/checkout.cy.js"
