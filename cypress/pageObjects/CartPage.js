import BasePage from './BasePage'

class CartPage extends BasePage {
  static get url () {
    return '/cart.html';
  }
  
  static get buttonCheckout(){
    return cy.get('#checkout');
  }
}

export default CartPage;

