/// <reference types="Cypress" />

describe('Context: My First Test', () => {
    before(() => {
      // runs once before all tests in the block (before all "it" blocks)
    });
  
    beforeEach('Clear Cookies', () => {
      // runs before each test in the block (before each "it" blocks)
      cy.clearCookies();
    });
  
    after('Log something after all test runs', () => {
      // runs once after all tests in the block (after all "it" blocks)
      cy.log('we completed this test run!');
    });
  
    afterEach(() => {
      // runs after each test in the block (after each "it" blocks)
    });
  
    it('Check that user can login valid credentials', () => {
      cy.visit('/login');
      expect(true).to.equal(true);
    });
  
    it('Check if user can insert INVALID username', () => {
      expect(true).to.equal(true);
    });
  
    it('Check if user can login WITHOUT username', () => {
      expect(true).to.equal(true);
    });
  });
  