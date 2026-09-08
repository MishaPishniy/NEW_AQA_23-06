describe("SauceDemo — робота з елементами", () => {
  beforeEach(() => {
  
    cy.login()
  });

  it("Фільтрація елементів", () => {
    cy.get('[data-test="inventory-item-name"]')
      .first()
      .should("have.text", "Sauce Labs Backpack");

    cy.get('[data-test="inventory-item-name"]').last();

    cy.get('[data-test="inventory-item-name"]').eq(1)


     cy.get('[data-test="inventory-item"]').filter(':contains("Sauce Labs Backpack")')
     .should('have.length' , 1)


      cy.get('[data-test="inventory-item"]').first()
      .find('[data-test="inventory-item-name"]')
      .should("have.text", "Sauce Labs Backpack");


      cy.get('[data-test="inventory-list"]')
     .children('[data-test="inventory-item"]')
     .should('have.length' , 6)

     cy.contains('[data-test="inventory-list"]' ,"Sauce Labs Backpack")
     .should('be.visible')

     cy.get('[data-test="product-sort-container"]').as('sortSelector')

     cy.get('@sortSelector').select('lohi')

     cy.get('@sortSelector').should('have.value' , 'lohi')


     cy.get(('[data-test="inventory-item"]'))
     .should('have.length' , 6)
     .each(($name , index) => {
        cy.log(`Index potochnogo elementa ${index}`)

        cy.wrap($name)
        .should('be.visible')



        cy.get(('[data-test="inventory-item"]'))
        .then(($item) => {
            expect($item).to.have.lenght(6)
        })

   

     })
  });
});
