describe("SauceDemo — Visual testing", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Створює screenshot сторінки товарів", () => {
   // cy.get('[data-test="inventory-list"]').should("be.visible");

    cy.get('[data-test="title"]').should("have.text", "Incorrect title");

    cy.screenshot("inventory-page", {
      capture: "fullPage",
    });

    cy.get('[data-test="inventory-list"]').screenshot("inventory-list");
  });
});
