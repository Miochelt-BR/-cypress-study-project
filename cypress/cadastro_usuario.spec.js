import { faker } from '@faker-js/faker';

describe("Teste de Cadastro", () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it("Deve realizar um cadastro válido", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password(8); 

    cy.screenshot('01-acessando-pagina');

    cy.get('#user').type(name);
    cy.screenshot('02-preenchendo-user');

    cy.get('#email').type(email);
    cy.screenshot('03-preenchendo-email');

    cy.get('#password').type(password);
    cy.screenshot('04-preenchendo-senha');

    cy.get('#btnRegister').click();
    cy.screenshot('05-clicando-botao');

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Cadastro realizado!');
    cy.get('.swal2-container').contains(`Bem-vindo ${name}`);

    cy.url().should('eq', 'https://automationpratice.com.br/my-account');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
