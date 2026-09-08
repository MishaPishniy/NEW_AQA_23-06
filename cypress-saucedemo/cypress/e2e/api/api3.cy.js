describe('Profile API', () => {
  it('Авторизується і отримує профіль', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth/login',
      body: {
        email: 'student@test.com',
        password: 'Test12345',
      },
    }).then((loginResponse) => {
      expect(loginResponse.status).to.eq(200);

      const token = loginResponse.body.token;

      cy.request({
        method: 'GET',
        url: '/api/profile',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((profileResponse) => {
        expect(profileResponse.status).to.eq(200);
        expect(profileResponse.body.email)
          .to.eq('student@test.com');
      });
    });
  });
});