describe('Users API', () => {
  it('Отримує користувача за ID', () => {
    cy.request('/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
      expect(response.body.name).to.eq('Leanne Graham');
    });
  });


   it('Отримує список користувачів', () => {
    cy.request({
      method: 'GET',
      url: '/users',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.length(10);
    });
  });

  it('Отримує список користувачів', () => {
    cy.request({
      method: 'GET',
      url: '/users',
    }).then((response) => {


      const body = response.body[0];
      expect(body).to.have.property('id');
      expect(body).to.have.property('name');

      expect(response.status).to.eq(200);
    });
  });

   it('Отримує користувача за ID  квері параметром', () => {
     cy.request({
      method: 'GET',
      url: '/users',
      qs: {
        id: 1
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
    });
  });
});