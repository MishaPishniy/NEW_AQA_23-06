Cypress.Commands.add(
  "login",
  (
    username = "standard_user",
    password = "secret_sauce"
  ) => {
    cy.visit("/");

    cy.get('[data-test="username"]')
      .should("be.visible")
      .type(username);

    cy.get('[data-test="password"]')
      .should("be.visible")
      .type(password, { log: false });

    cy.get('[data-test="login-button"]')
      .should("be.visible")
      .click();

    cy.location("pathname")
      .should("eq", "/inventory.html");
  }
);