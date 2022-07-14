import BasePage from './BasePage'

class SaucedemoPage extends BasePage {
  static get url () {
    return 'https://www.saucedemo.com/';
  }

  static get inputLogin(){
    return cy.get('#user-name');
  }
  static get inputPassword(){
    return cy.get('#password');
  }
  static get buttonLogin(){
    return cy.get('#login-button');
  }
  static get validateError(){
    return cy.get('.error-message-container');
  }
  static get (){
    return cy.get('');
  }
}

export default SaucedemoPage;

