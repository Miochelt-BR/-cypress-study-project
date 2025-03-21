Cypress.Commands.add('preencherCadastro', (name, email, password) => {
  if (name) cy.get('#user').type(name);
  if (email) cy.get('#email').type(email);
  if (password) cy.get('#password').type(password);
});

Cypress.Commands.add('tirarPrint', (nomeArquivo) => {
  cy.screenshot(nomeArquivo);
});

Cypress.Commands.add('submeterCadastro', () => {
  cy.get('#btnRegister').click();
});

Cypress.Commands.add('validarMensagem', (seletor, mensagem) => {
  cy.get(seletor).should('be.visible').and('contain', mensagem);
});
