/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have product cards', () => {
    cy.get('[data-testid="product-card"]').should('have.length', 30);
  });

  it('should search products', () => {
    cy.get('#search-product').type('iphone').type('{enter}');
    cy.get('[data-testid="product-card"]').should('have.length.above', 0);
  });

  it('should show not found products message', () => {
    cy.get('#search-product').type('sfsfsfsdsd').type('{enter}');
    cy.get('[data-testid="product-card"]').should('have.length', 0);
    cy.contains('Products not found!').should('be.visible');
  });

  it('should show full product card info', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="full-card"]').should('be.visible');
  });

  it('should hide full product card by button click', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="full-card"]').should('be.visible');
    cy.get('button[aria-label="Close card"]').click();
    cy.get('[data-testid="full-card"]').should('not.exist');
  });

  it('should hide full product card by overlay click', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="full-card"]').should('be.visible');
    cy.get('body').click(0, 0);
    cy.get('[data-testid="full-card"]').should('not.exist');
  });

  it('should save search text', () => {
    const text = 'phone';
    cy.get('#search-product').type(text).type('{enter}');
    cy.get('[data-testid="about-link"]').click();
    cy.get('h1').contains('About Us Page');
    cy.get('[data-testid="home-link"]').click();
    cy.get('#search-product').should('have.value', text);
  });
});
