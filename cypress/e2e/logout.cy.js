describe('Logout', () => {
  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.login()

  });
  it('passes', () => {
    
    cy.logout()

    cy.wait(3000)

    cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
})