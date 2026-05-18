describe('Exclusão de produto', () => {

  beforeEach(() => {

    cy.visit('/login')

    cy.get('[data-testid="email"]').type('fulano@qa.com')

    cy.get('[data-testid="senha"]').type('teste')

    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/admin/home')

    cy.visit('/admin/listarprodutos')
  })

  it('Deve excluir produto com sucesso', () => {

    cy.get('button.btn.btn-danger').first().click()



  })

})