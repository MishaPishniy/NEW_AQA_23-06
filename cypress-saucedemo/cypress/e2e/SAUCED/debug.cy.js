describe("SauceDemo — Debugging", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Перевіряє заголовок сторінки", () => {
    
    cy.log("hello")
    cy.get('[data-test="title"]')
      .debug()
      .should("be.visible")
      .and("have.text", "Product");
  });
});