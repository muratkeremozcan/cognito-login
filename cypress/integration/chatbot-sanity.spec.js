describe('Chat box sanity', () => {
  before('should load initial chat box flow', () => {
    cy.intercept('POST', '**/v1/p').as('segment')
    cy.visit('/')
    cy.wait('@segment')

    cy.title().should('eq', 'Extend')
  })

  it('should login', () => {
    cy.get('circle').click()

    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername').type('a')
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword').type('b')
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn').click()
  })
})
