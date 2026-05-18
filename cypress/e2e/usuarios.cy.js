describe('Cadastro de usuário', () => {

  it('Deve cadastrar usuário com sucesso', () => {

    const email = `teste${Date.now()}@qa.com`

    cy.visit('/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Usuário QA')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type('123456')

    cy.get('[data-testid="cadastrar"]').click()

    cy.contains('Cadastro realizado com sucesso')
  })

})