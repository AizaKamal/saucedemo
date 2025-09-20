import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';

describe('Product Selection Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('testData').then((data) => {
      LoginPage.login(data.username, data.password);
    });
  });

  it('should add product to cart', () => {
    ProductsPage.addProductToCart();
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });
});
