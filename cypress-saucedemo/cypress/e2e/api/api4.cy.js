cy.intercept('GET', '/users/1').as('getUser');

cy.visit('/products');

cy.wait('@getUser').then(interception => {
    expect(interception.response.statusCode).to.eq(200);
})

