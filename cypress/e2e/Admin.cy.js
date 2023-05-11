describe('Admin', () => {
  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.login()
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard')
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()


  });
  it('pesquisar usuario', () => {

    cy.get(':nth-child(2) > .oxd-input')
      .should('have.value', '')
      .type('Alice.Duval')
      .should('have.value', 'Alice.Duval')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .should('contain', '-- Select --')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.contains('ESS').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .should('have.text', 'ESS')

    cy.get('.oxd-autocomplete-text-input > input')
      .should('have.value', '')
      .type('Alice Duval')
      .should('have.value', 'Alice Duval')
    cy.get('.oxd-autocomplete-option')
      .contains('Alice Duval')
      .click()
    cy.get('.oxd-autocomplete-text-input > input')
    cy.contains('Alice Duval').should('be.visible')

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .should('contain', '-- Select --')

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .click({ force: true })
    cy.contains('Enabled').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .should('have.text', 'Enabled')

    cy.get('.oxd-form-actions > .oxd-button--secondary')
      .should('be.visible')
      .click({force: true})
    cy.get('.oxd-table-card > .oxd-table-row')
      .should('contain', 'Alice Duval')

  })
})