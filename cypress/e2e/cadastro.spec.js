
import { faker } from '@faker-js/faker';

describe("Teste de Cadastro", () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it("Deve realizar um cadastro válido", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password(8);

    cy.tirarPrint('01-acessando-pagina');
    cy.preencherCadastro(name, email, password);
    cy.tirarPrint('02-preenchendo-dados');

    cy.submeterCadastro();
    cy.tirarPrint('03-clicando-botao');

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Cadastro realizado!');
    cy.get('.swal2-container').contains(`Bem-vindo ${name}`);

    cy.url().should('eq', 'https://automationpratice.com.br/my-account');
  });

  it("Não deve permitir cadastro sem nome", () => {
    const email = faker.internet.email();
    const password = faker.internet.password(8);

    cy.preencherCadastro(null, email, password);
    cy.tirarPrint('02-preenchendo-dados');

    cy.submeterCadastro();
    cy.tirarPrint('03-clicando-botao');

    cy.validarMensagem('#errorMessageFirstName', 'O campo nome deve ser prenchido');
  });

  it("Não deve permitir cadastro sem email", () => {
    const name = faker.person.fullName();
    const password = faker.internet.password(8);

    cy.preencherCadastro(name, null, password);
    cy.tirarPrint('02-preenchendo-dados');

    cy.submeterCadastro();
    cy.tirarPrint('03-clicando-botao');

    cy.validarMensagem('#errorMessageFirstName', 'O campo e-mail deve ser prenchido corretamente');
  });

  it("Não deve permitir cadastro sem senha", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();

    cy.preencherCadastro(name, email, null);
    cy.tirarPrint('02-preenchendo-dados');

    cy.submeterCadastro();
    cy.tirarPrint('03-clicando-botao');

    cy.validarMensagem('#errorMessageFirstName', 'O campo senha deve ter pelo menos 6 dígitos');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
