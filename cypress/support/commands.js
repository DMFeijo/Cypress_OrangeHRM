Cypress.Commands.add('login', () => {
        cy.get('[name=username]').type('Admin')
        cy.get('[name=password]').type('admin123')
        cy.get('[type=submit]').click()
})

Cypress.Commands.add('logout', () => {
        cy.get('.oxd-userdropdown-img').click()
        cy.contains('Logout').click()
})
Cypress.on('uncaught:exception', (err, runnable) => {
        // não falhar o teste
        return false;
});
