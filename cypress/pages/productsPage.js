class ProductsPage {
    elements = {
      productTitle: () => cy.get('.title'),
      addToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
      cartIcon: () => cy.get('.shopping_cart_link')
    }
  
    addProductToCart() {
      this.elements.addToCartBtn().click();
      this.elements.cartIcon().click();
    }
  }
  
  module.exports = new ProductsPage();
  