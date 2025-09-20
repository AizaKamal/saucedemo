import LoginPage from '../pages/loginPage';

describe('Login & Logout Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('testData').then((data) => {
      cy.wrap(data).as('userData');
    });
  });

  it('should login successfully', function () {
    LoginPage.login(this.userData.username, this.userData.password);
    cy.url().should('include', '/inventory.html');
  });

  it('should logout successfully', function () {
    LoginPage.login(this.userData.username, this.userData.password);
    LoginPage.logout();
    cy.url().should('include', '/');
  });
});
