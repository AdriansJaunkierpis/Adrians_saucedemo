import BasePage from './BasePage'

class CheckoutOnePage extends BasePage {
  static get url () {
    return '/checkout-step-one.html';
  }
  
  static get inputFirstName(){
    return cy.get('#first-name');
  }
  static get inputLastName(){
    return cy.get('#last-name');
  }
  static get inputZip(){
    return cy.get('#postal-code');
  }
  static get buttonContinue(){
    return cy.get('#continue');
  }
}

export default CheckoutOnePage;

