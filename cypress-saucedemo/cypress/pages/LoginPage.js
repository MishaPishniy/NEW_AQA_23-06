class LoginPages {
  get usernameInput() {
    return cy.get('[data-test="username"]');
  }

  get userpasswordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  open() {
    cy.visit("/");
  }

  enterUsername(username) {
    this.usernameInput.should("be.visible").type(username);
  }

  enterPassword(password) {
    this.userpasswordInput.should("be.visible").type(password);
  }

  clickLoginButton() {
    this.loginButton.should("be.visible").click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }
}

export default LoginPages;
