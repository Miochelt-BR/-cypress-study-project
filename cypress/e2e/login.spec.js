
// Página de Login utilizando o padrão Page Object Model (POM) para melhor organização e reutilização de código nos testes.

describe("Teste de Login", () => {
  
  it.only("Deve realizar um login válido", () => {
    cy.acessarLogin();
    cy.preencherEmail();
    cy.preencherSenha();
    cy.clicarBotaoLogin();
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Login realizado');

    cy.url().should('eq', 'https://automationpratice.com.br/my-account');
  });

  it("Não deve permitir login sem e-mail", () => {
    cy.acessarlogin();
    const password = "123456";
    cy.get('#password').type(password);
    cy.screenshot('02-preenchendo-senha');

    cy.get('#btnLogin').click();
    cy.screenshot('03-clicando-botao');

    cy.get('.invalid_input').should('be.visible').and('contain', 'E-mail inválido.');
  });

  it("Não deve permitir login sem senha", () => {
    cy.acessarlogin();
    const email = "thiago.arica@outlook.com";
    
    cy.get('#user').type(email);
    cy.screenshot('02-preenchendo-email');

    cy.get('#btnLogin').click();
    cy.screenshot('03-clicando-botao');

    cy.get('.invalid_input').should('be.visible').and('contain', 'Senha inválida.');
  });

  it("Não deve permitir login com credenciais inválidas", () => {
    cy.acessarlogin();
    cy.get('#btnLogin').click();
    cy.screenshot('04-clicando-botao');

    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
