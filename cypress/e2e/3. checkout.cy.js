import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Checkout Process Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('testData').then((data) => {
      LoginPage.login(data.username, data.password);
    });
  });

  it('should complete checkout successfully', () => {
    ProductsPage.addProductToCart();
    CheckoutPage.checkout('John', 'Doe', '12345');
    CheckoutPage.elements.successMsg().should('have.text', 'Thank you for your order!');
  });
});
