describe('Cadastro de produtos', () => {

  beforeEach(() => {

    cy.visit('/login')

    cy.get('[data-testid="email"]').type('fulano@qa.com')
    cy.get('[data-testid="senha"]').type('teste')

    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/admin/home')
  })

  it('Deve cadastrar produto com sucesso', () => {

    const produto = `Produto QA teste DOT ${Date.now()}`

    cy.get('[data-testid="cadastrar-produtos"]').click()

    cy.get('[data-testid="nome"]').should('be.visible').type(produto)

    cy.get('[data-testid="preco"]').type('100')

    cy.get('[data-testid="descricao"]').type('Produto teste DOT')

    cy.get('[data-testid="quantity"]').type('10')

    cy.get('[data-testid="cadastarProdutos"]').click()

    cy.contains('Produto QA teste DOT')

  })

})