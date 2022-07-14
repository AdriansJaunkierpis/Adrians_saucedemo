import BasePage from './BasePage'

class CheckoutCompletePage extends BasePage {
  static get url () {
    return '/checkout-complete.html';
  }
  
  static get completeHeader(){
    return cy.get('.complete-header');
  }
}

export default CheckoutCompletePage;

