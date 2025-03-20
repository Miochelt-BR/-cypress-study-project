Cypress.Commands.add("acessarLogin", () => {
  cy.visit('/login');
  cy.screenshot('01-acessando-pagina-login');
});

Cypress.Commands.add("preencherEmail", (email) => {
  cy.get('#user').type(email);
  cy.screenshot('02-preenchendo-email');
});

Cypress.Commands.add("preencherSenha", (senha) => {
  cy.get('#password').type(senha);
  cy.screenshot('03-preenchendo-senha');
});

Cypress.Commands.add("clicarBotaoLogin", () => {
  cy.get('#btnLogin').click();
  cy.screenshot('04-clicando-botao');
});

Cypress.Commands.add("login", (email, senha) => {
  cy.preencherEmail(email);
  cy.preencherSenha(senha);
  cy.clicarBotaoLogin();
});
