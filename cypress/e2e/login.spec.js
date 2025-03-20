import '../support/login_commands';

describe("Teste de Login", () => {
  
  beforeEach(() => {
    cy.acessarLogin();
  });

  it.only("Deve realizar um login válido", () => {
    cy.login("thiago.arica@outlook.com", "123456");

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Login realizado');
    
    cy.url().should('eq', 'https://automationpratice.com.br/my-account');
  });

  it("Não deve permitir login sem e-mail", () => {
    cy.preencherSenha("123456");
    cy.clicarBotaoLogin();

    cy.get('.invalid_input')
      .should('be.visible')
      .and('contain', 'E-mail inválido.');
  });

  it("Não deve permitir login sem senha", () => {
    cy.preencherEmail("thiago.arica@outlook.com");
    cy.clicarBotaoLogin();

    cy.get('.invalid_input')
      .should('be.visible')
      .and('contain', 'Senha inválida.');
  });

  it("Não deve permitir login com credenciais inválidas", () => {
    cy.preencherEmail("email@invalido.com");
    cy.preencherSenha("senhaerrada");
    cy.clicarBotaoLogin();

    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
