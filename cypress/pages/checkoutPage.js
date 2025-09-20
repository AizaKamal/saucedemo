class CheckoutPage {
    elements = {
      checkoutBtn: () => cy.get('[data-test="checkout"]'),
      firstName: () => cy.get('[data-test="firstName"]'),
      lastName: () => cy.get('[data-test="lastName"]'),
      postalCode: () => cy.get('[data-test="postalCode"]'),
      continueBtn: () => cy.get('[data-test="continue"]'),
      finishBtn: () => cy.get('[data-test="finish"]'),
      successMsg: () => cy.get('.complete-header')
    }
  
    checkout(firstName, lastName, postalCode) {
      this.elements.checkoutBtn().click();
      this.elements.firstName().type(firstName);
      this.elements.lastName().type(lastName);
      this.elements.postalCode().type(postalCode);
      this.elements.continueBtn().click();
      this.elements.finishBtn().click();
    }
  }
  
  module.exports = new CheckoutPage();
  