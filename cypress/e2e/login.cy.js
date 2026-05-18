describe('Login', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('Deve realizar login com sucesso', () => {

    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="senha"]').type('teste')

    cy.get('[data-testid="entrar"]').click()

    cy.contains('Home')
  })

  it('Deve exibir erro ao informar senha inválida', () => {

    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="senha"]').type('senhaErrada')

    cy.get('[data-testid="entrar"]').click()

    cy.contains('Email e/ou senha inválidos')
  })

})