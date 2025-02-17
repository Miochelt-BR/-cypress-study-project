describe("login", () => {
  it("testando login válido", () => {
    cy.visit('/');

    cy.get('#top_header')
      .as('cabecalho')
      .contains('Login');

    cy.get('@cabecalho')
      .find('.fa-user')
      .should('be.visible');
  });
  it("selects Checkout View Two ", () => {
    cy.visit('/'); 
    cy.get('.header-logo') 
    cy.get('#footer_one')
      .contains('Checkout View Two')
      .click()
      cy.get('#country')
        .select('Colombia')


  });



  

  
});
