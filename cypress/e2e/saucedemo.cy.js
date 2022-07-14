import InventoryPage from "../pageObjects/InventoryPage";
import SaucedemoPage from "../pageObjects/SaucedemoPage";
import CartPage from "../pageObjects/CartPage";
import CheckoutOnePage from "../pageObjects/CheckoutOnePage";
import CheckoutTwoPage from "../pageObjects/CheckoutTwoPage";
import CheckoutCompletePage from "../pageObjects/CheckoutCompletePage";

describe('Saucedemo test', () => {
  beforeEach(() => {
    SaucedemoPage.visit();
  });
  it('login with locked-out-user', () => {
  SaucedemoPage.inputLogin.type("locked_out_user");
  SaucedemoPage.inputPassword.type("secret_sauce");
  SaucedemoPage.buttonLogin.click();
  SaucedemoPage.validateError.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
  })
  it('login with wrong password', () => {
    SaucedemoPage.inputLogin.type("locked_out_user");
    SaucedemoPage.inputPassword.type("wrongpass");
    SaucedemoPage.buttonLogin.click();
    SaucedemoPage.validateError.should("have.text", "Epic sadface: Username and password do not match any user in this service");
  })
  it('Validate item amount', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventoryItem.should("have.length", 6);
  });
  it('Sort high to low', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventorySortContainer.select("Price (high to low)");
    InventoryPage.inventoryItemName.first().should("have.text", "Sauce Labs Fleece Jacket");
  })
  it('Sort low to high', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventorySortContainer.select("Price (low to high)");
    InventoryPage.inventoryItemName.first().should("have.text", "Sauce Labs Onesie");
  })
  it('Sort items - Name (Z to A)', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventorySortContainer.select("Name (Z to A)");
    InventoryPage.inventoryItemName.first().should("have.text", "Test.allTheThings() T-Shirt (Red)");
  })
  it('Validate shopping cart badge amount', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventoryItemName.contains("Sauce Labs Bolt T-Shirt").click();
    InventoryPage.addCart.click();
    InventoryPage.cartBadge.should("have.text", 1);
    InventoryPage.backButton.click();
    InventoryPage.inventoryItemName.contains("Sauce Labs Bike Light").click();
    InventoryPage.addCart.click();
    InventoryPage.cartBadge.should("have.text", 2);
  })
  it('Reset App State', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventoryItemName.contains("Sauce Labs Bolt T-Shirt").click();
    InventoryPage.addCart.click();
    InventoryPage.backButton.click();
    InventoryPage.cartBadge.should("have.text", 1);
    InventoryPage.iconStack.click();
    InventoryPage.resetAppState.click();
    InventoryPage.cartBadge.should("not.exist");
  })
  it('Validate shopping cart remove button functionality', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventoryItemName.contains("Sauce Labs Bolt T-Shirt").click();
    InventoryPage.addCart.click();
    InventoryPage.cartBadge.should("have.text", 1);
    InventoryPage.removeCartBoltShirt.click();
    InventoryPage.cartBadge.should("not.exist");
  })
  it('Buy a T-shirt', () => {
    SaucedemoPage.inputLogin.type("standard_user");
    SaucedemoPage.inputPassword.type("secret_sauce");
    SaucedemoPage.buttonLogin.click();
    InventoryPage.inventoryItemName.contains("Test.allTheThings() T-Shirt (Red)").click();
    InventoryPage.addCart.click();
    InventoryPage.cartShopping.click();
    CartPage.buttonCheckout.click();
    CheckoutOnePage.inputFirstName.type("Adrians");
    CheckoutOnePage.inputLastName.type("Jaunkierpis");
    CheckoutOnePage.inputZip.type("LV-1234");
    CheckoutOnePage.buttonContinue.click();
    CheckoutTwoPage.itemName.should("have.text", "Test.allTheThings() T-Shirt (Red)");
    CheckoutTwoPage.buttonFinish.click();
    CheckoutCompletePage.completeHeader.should("contains.text", "THANK YOU FOR YOUR ORDER");
  })
});