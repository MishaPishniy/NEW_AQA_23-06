class InventoryPages {
  get inventoryPage() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get pageTitle() {
    return cy.get('[data-test="title"]');
  }

  checkPageOpened() {
    this.pageTitle.should("be.visible");
  }
}

export default InventoryPages;
