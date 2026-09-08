describe('POST /posts', () => {
  it('Створює новий пост', () => {
    const newPost = {
      title: 'Cypress API testing',
      body: 'Навчаємося тестувати API',
      userId: 1,
    };

    cy.request({
      method: 'POST',
      url: '/posts',
      body: newPost,
    }).then((response) => {
      expect(response.status).to.eq(201);

      expect(response.body.title).to.eq(newPost.title);
      expect(response.body.body).to.eq(newPost.body);
      expect(response.body.userId).to.eq(newPost.userId);
      expect(response.body).to.have.property('id');
    });
  });



  it('Повністю оновлює пост', () => {
  const updatedPost = {
    id: 1,
    title: 'Updated title',
    body: 'Updated text',
    userId: 1,
  };

  cy.request({
    method: 'PUT',
    url: '/posts/1',
    body: updatedPost,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq('Updated title');
    expect(response.body.body).to.eq('Updated text');
  });
});


it('Змінює тільки title поста', () => {
  cy.request({
    method: 'PATCH',
    url: '/posts/1',
    body: {
      title: 'New title',
    },
   /* headers: {
    Authorization: 'Bearer some-token',
  },*/
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq('New title');
  });
});

/* Скорочений варіант запиту
cy.request('POST', '/posts', {
  title: 'Test post',
  body: 'Some text',
  userId: 1,
}); */


it('Повертає 404 для неіснуючого endpoint', () => {
  cy.request({
    method: 'GET',
    url: '/unknown-page',
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
  });
});
});