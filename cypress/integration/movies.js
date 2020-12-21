describe('Movies', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page is opened', function() {
    cy.contains('MCU movies')
  })

  it('search works', function() {
    cy.wait(5000)
    cy.get('input:first').type('2018')
    cy.get('#searchbutton').click()
    cy.wait(5000)
    cy.contains('Black Panther')
    cy.contains('Iron Man').should('not.exist')
  })
})