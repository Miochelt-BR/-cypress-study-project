

describe("Teste de Login", () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it("Deve realizar um login válido", () => {
    const email = "thiago.arica@outlook.com";
    const password = "123456";

    cy.screenshot('01-acessando-pagina-login');

    cy.get('#user').type(email);
    cy.screenshot('02-preenchendo-email');

    cy.get('#password').type(password);
    cy.screenshot('03-preenchendo-senha');

    cy.get('#btnLogin').click();
    cy.screenshot('04-clicando-botao');

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Login realizado');

    cy.url().should('eq', 'https://automationpratice.com.br/my-account');
  });

  it("Não deve permitir login sem e-mail", () => {
    const password = "123456";
    cy.get('#password').type(password);
    cy.screenshot('02-preenchendo-senha');

    cy.get('#btnLogin').click();
    cy.screenshot('03-clicando-botao');

    cy.get('.invalid_input').should('be.visible').and('contain', 'E-mail inválido.');
  });

  it("Não deve permitir login sem senha", () => {
    const email = "thiago.arica@outlook.com";
    
    cy.get('#user').type(email);
    cy.screenshot('02-preenchendo-email');

    cy.get('#btnLogin').click();
    cy.screenshot('03-clicando-botao');

    cy.get('.invalid_input').should('be.visible').and('contain', 'Senha inválida.');
  });

  it("Não deve permitir login com credenciais inválidas", () => {
    cy.get('#btnLogin').click();
    cy.screenshot('04-clicando-botao');

    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
