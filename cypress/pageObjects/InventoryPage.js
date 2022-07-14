import BasePage from './BasePage'

class InventoryPage extends BasePage {
  static get url () {
    return '/inventory.html';
  }

  static get inventoryItem(){
    return cy.get('.inventory_item');
  }
  static get inventorySortContainer(){
    return cy.get('.product_sort_container');
  }
  static get inventoryItemName(){
    return cy.get('.inventory_item_name');
  }
  static get removeCartBoltShirt(){
    return cy.get('#remove-sauce-labs-bolt-t-shirt');
  }
  static get addCart(){
    return cy.get('.btn_primary');
  }
  static get cartBadge(){
    return cy.get('.shopping_cart_badge');
  }
  static get backButton(){
    return cy.get('#back-to-products');
  }
  static get iconStack(){
    return cy.get('#react-burger-menu-btn');
  }
  static get resetAppState(){
    return cy.get('#reset_sidebar_link');
  }
  static get cartShopping(){
    return cy.get('.shopping_cart_link');
  }
}

export default InventoryPage;

