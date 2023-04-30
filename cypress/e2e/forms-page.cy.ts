/// <reference types="cypress" />

describe('Forms page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  const fillForm = () => {
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="birthday"]').type('2001-01-01').should('have.value', '2001-01-01');
    cy.get('select[name="country"]').select('Argentina').should('have.value', 'Argentina');
    cy.get('input[name="gender"]').check('male');
    cy.get('input[value="male"]').should('be.checked');
    cy.get('input[name="avatar"]').selectFile('cypress/fixtures/lazy-cat.jpg', { force: true });
    cy.get('input[name="policy"]').check();
  };

  it('should have the form', () => {
    cy.get('form[name="info"]').should('be.visible');
  });

  it('should show required fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('._error_120fa_42').should('have.length', 7);
  });

  it('should add form card', () => {
    fillForm();

    cy.get('button[type="submit"]').click();
    cy.get('._error_120fa_42').should('have.length', 0);
    cy.get('[data-testid="form-card"]').should('have.length', 1);
  });

  it('should show and hide confirm message', () => {
    fillForm();

    cy.get('button[type="submit"]').click();

    cy.contains('The data has been saved!').should('be.visible');
    cy.get('.button').contains('OK').click();
    cy.contains('The data has been saved!').should('not.exist');

    cy.get('[data-testid="form-card"]').should('have.length', 1);
  });

  it('should save form card', () => {
    cy.get('[data-testid="form-card"]').should('have.length', 0);
    fillForm();
    cy.get('button[type="submit"]').click();
    cy.get('.button').contains('OK').click();
    cy.get('[data-testid="form-card"]').should('have.length', 1);

    cy.get('[data-testid="home-link"]').click();
    cy.get('h1').contains('Home Page').should('be.visible');
    cy.get('[data-testid="forms-link"]').click();
    cy.get('[data-testid="form-card"]').should('have.length', 1);
  });
});
