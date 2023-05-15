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
      .type('Aaliyah.Haq')
      .should('have.value', 'Aaliyah.Haq')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .should('contain', '-- Select --')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
    cy.contains('ESS').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .should('have.text', 'ESS')

    cy.get('.oxd-autocomplete-text-input > input')
      .should('have.value', '')
      .type('Aaliyah Haq')
      .should('have.value', 'Aaliyah Haq')
    cy.get('.oxd-autocomplete-option')
      .contains('Aaliyah Haq')
      .click()
    cy.get('.oxd-autocomplete-text-input > input')
    cy.contains('Aaliyah Haq').should('be.visible')

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .should('contain', '-- Select --')

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .click({ force: true })
    cy.contains('Enabled').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .should('have.text', 'Enabled')

    cy.get('.oxd-form-actions > .oxd-button--secondary')
      .should('be.visible')
      .click({ force: true })
    cy.get('.oxd-table-card > .oxd-table-row')
      .should('contain', 'Aaliyah Haq')

  })
  it('Remover usuário', () => {

    cy.get(':nth-child(4) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({ force: true })
    cy.get('.oxd-sheet')
      .should('be.visible')
      .should('contain', 'Are you Sure?')
    cy.get('.oxd-button--label-danger').click()
    cy.get('.oxd-toast')
      .should('be.visible')
      .should('contain', 'Successfully Deleted')

  });
  it.only('Editar usuário', () => {

    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({ force: true })

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span')
      .contains('Admin')
      .click()

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
      .click()
    cy.get('.oxd-select-dropdown > :nth-child(3)')
      .contains('Disabled')
      .click()

    cy.get('.oxd-autocomplete-text-input > input')
      .clear()
      .type('O')
    cy.wait(3000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)')
    cy.contains('Odis Adalwin')
      .click()
    cy.get(':nth-child(2) > .oxd-input')
      .clear()
      .type('Aaliyah.Haq.Modificado')
    cy.get('.oxd-button--secondary')
      .click()
    cy.wait(2000)
    cy.get('.oxd-toast')
      .should('be.visible')
      .should('contain', 'Successfully Updated')
  });
})