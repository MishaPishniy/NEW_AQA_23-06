Cypress.Commands.add('visitQAuto', (path = '/') => {
  return cy
    .env(
      ['basicAuthUsername', 'basicAuthPassword'],
      { log: false }
    )
    .then(({ basicAuthUsername, basicAuthPassword }) => {
      cy.visit(path, {
        auth: {
          username: basicAuthUsername,
          password: basicAuthPassword
        }
      });
    });
});


Cypress.Commands.add('loginToQAuto', () => {
  return cy
    .env(
      ['userEmail', 'userPassword'],
      { log: false }
    )
    .then(({ userEmail, userPassword }) => {
      expect(
        Boolean(userEmail),
        'userEmail повинен бути вказаний'
      ).to.equal(true);

      expect(
        Boolean(userPassword),
        'userPassword повинен бути вказаний'
      ).to.equal(true);

      cy.contains('button', 'Sign In')
        .should('be.visible')
        .click();

      cy.get('#signinEmail')
        .should('be.visible')
        .clear()
        .type(userEmail, { log: false });

      cy.get('#signinPassword')
        .should('be.visible')
        .clear()
        .type(userPassword, { log: false });

      cy.contains('.modal-footer button', 'Login')
        .should('be.enabled')
        .click();
    });
});