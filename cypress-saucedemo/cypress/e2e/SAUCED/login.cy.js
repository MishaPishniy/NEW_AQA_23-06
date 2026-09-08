import LoginPage from "../../pages/LoginPage.js";
import InventoryPage from "../../pages/InventoryPage.js";

describe("Login with POM", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.open();
  });

  it("Авторизація коректного користувача", () => {
    loginPage.login(username, password);

    cy.location("pathname")
      .should("eq", "/inventory.html");

    inventoryPage.checkPageOpened();
  });
});