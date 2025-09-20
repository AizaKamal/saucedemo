class LoginPage {
    elements = {
      usernameInput: () => cy.get('[data-test="username"]'),
      passwordInput: () => cy.get('[data-test="password"]'),
      loginBtn: () => cy.get('[data-test="login-button"]'),
      menuBtn: () => cy.get('#react-burger-menu-btn'),
      logoutBtn: () => cy.get('#logout_sidebar_link')
    }
  
    login(username, password) {
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click();
    }
  
    logout() {
      this.elements.menuBtn().click();
      this.elements.logoutBtn().click();
    }
  }
  
  module.exports = new LoginPage();
  