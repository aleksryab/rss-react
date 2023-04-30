/// <reference types="cypress" />

describe('Routing', () => {
  it('should render navigation', () => {
    cy.visit('/');
    cy.get('nav').should('be.visible');
  });

  it('should navigation work', () => {
    cy.visit('/');

    cy.get('[data-testid="about-link"]').click();
    cy.url().should('include', '/about');

    cy.get('[data-testid="forms-link"]').click();
    cy.url().should('include', '/forms');
  });

  it('should render Home page', () => {
    cy.visit('/');
    cy.get('h1').contains('Home Page');
  });

  it('should render About page', () => {
    cy.visit('/about');
    cy.get('h1').contains('About Us Page');
  });

  it('should render Forms page', () => {
    cy.visit('/forms');
    cy.get('h1').contains('Forms Page');
  });

  it('should redirect on 404 page', () => {
    cy.visit('/jdlkfjlk');
    cy.get('h1').contains('404 page');
    cy.contains('Page not found').should('be.visible');
  });
});
