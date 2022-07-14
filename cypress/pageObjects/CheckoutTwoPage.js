import BasePage from './BasePage'

class CheckoutTwoPage extends BasePage {
  static get url () {
    return '/checkout-step-two.html';
  }
  
  static get itemName(){
    return cy.get('.inventory_item_name');
  }
  static get buttonFinish(){
    return cy.get('#finish');
  }
}

export default CheckoutTwoPage;

