describe('SAUCED_DEMO авторизація', () => {
  beforeEach(() => {
    cy.visit('/' ) /*, {
    // http-pass
        username : ,
        password : 
*/
    });
  })

it("Вхід коректним користувачем", ()=>{

    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').should('be.visible')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="login-button"]').click()

    //перевірили перехід на сторінку
    cy.url('pathname').should('eq' , 'https://www.saucedemo.com/inventory.html')
    // Переірка що елемент відображається і містить текст Products
    cy.get('[data-test="title"]').should('be.visible').and('have.text' , 'Products')
   // cy.get('[data-test="title"]').should('have.text' , 'Products')
})

it("Вхід під locked_out_user користувачем", ()=>{
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="username"]').type('locked_out_user')

    cy.get('[data-test="password"]').should('be.visible')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible').and('have.text' , 'Epic sadface: Sorry, this user has been locked out.')

})

it("Вхід під locked_out_user користувачем з іншими селекторами", ()=>{
    cy.get('#user-name').should('be.visible')
    cy.get('[data-test="username"]').type('locked_out_user')

    cy.get('[data-test="password"]').should('be.visible')
    cy.get('#password').type('secret_sauce')

    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible').and('have.text' , 'Epic sadface: Sorry, this user has been locked out.')

})


