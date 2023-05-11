describe('Login', () => {
  beforeEach(() => {
    // visitar a URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verificar se a imagem esta presente na tela 
    cy.get('.orangehrm-login-branding').should('be.visible')
  });
  it.only('Login com sucesso', () => {

    cy.login()

    cy.get('.oxd-topbar-header').should('contain', 'Dashboard')
  })
  it('login sem nome de usuário', () => {

    cy.get('[name=password]').type('admin123')
    cy.get('[type=submit]').click()

    cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')

  });
  it('login sem senha', () => {

    cy.get('[name=username]').type('Admin')
    cy.get('[type=submit]').click()

    cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
  });
  it('login com nome de usuário inválido', () => {

    cy.get('[name=username]').type('Teste')
    cy.get('[name=password]').type('admin123')
    cy.get('[type=submit]').click()

    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')

  });
  it('login com senha inválida', () => {

    cy.get('[name=username]').type('Admin')
    cy.get('[name=password]').type('Teste')
    cy.get('[type=submit]').click()

    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')

  });
  it('login com nome de usuário e senha inválidos', () => {

    cy.get('[name=username]').type('Teste')
    cy.get('[name=password]').type('Teste')
    cy.get('[type=submit]').click()

    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')

  });
})