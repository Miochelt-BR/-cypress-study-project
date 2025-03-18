it("testando login válido", () => {
  cy.visit('/register');
  cy.screenshot('01-acessando-pagina');

  cy.get('#user').type("Thiago");
  cy.screenshot('02-preenchendo-user');

  cy.get('#email').type("thiago.arica@outlook.com");
  cy.screenshot('03-preenchendo-email');

  cy.get('#password').type("123456");
  cy.screenshot('04-preenchendo-senha');

  cy.get('#btnRegister').click();
  cy.screenshot('05-clicando-botao');

  cy.url().should('eq', 'https://automationpratice.com.br/my-account');
});
