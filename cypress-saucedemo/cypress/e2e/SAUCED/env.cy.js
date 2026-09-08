describe("SauceDemo — Environment Variables", () => {
  it("Авторизація з даними з Cypress env", () => {
    cy.env(["username", "password"])
      .then(({ username, password }) => {
        cy.login(username, password);
      });
  });
});