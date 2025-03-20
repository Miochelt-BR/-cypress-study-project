
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("acessarLogin", () => {
  cy.visit('/login');
  cy.screenshot('01-acessando-pagina-login');
});

Cypress.Commands.add("preencherEmail", () => {
  cy.get('#user').type("thiago.arica@outlook.com");
  cy.screenshot('02-preenchendo-email');
});

Cypress.Commands.add("preencherSenha", () => {
  cy.get('#password').type("123456");
  cy.screenshot('03-preenchendo-senha');
});

Cypress.Commands.add("clicarBotaoLogin", () => {
  cy.get('#btnLogin').click();
  cy.screenshot('04-clicando-botao');
});







