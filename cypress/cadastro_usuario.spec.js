describe("Teste de Cadastro", () => {
  beforeEach(() =>{
    cy.visit('/register');

  })
  it("Deve realizar um cadastro válido", () => {
    cy.screenshot('01-acessando-pagina');

    cy.get('#user').type("Thiago");
    cy.screenshot('02-preenchendo-user');

    cy.get('#email').type("thiago.arica@outlook.com");
    cy.screenshot('03-preenchendo-email');

    cy.get('#password').type("123456");
    cy.screenshot('04-preenchendo-senha');

    cy.get('#btnRegister').click();
    cy.screenshot('05-clicando-botao');

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Cadastro realizado!');
    cy.get('.swal2-container').contains('Bem-vindo Thiago');

    cy.url().should('eq', 'https://automationpratice.com.br/my-account');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
