describe('app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Add Item', () => {
    cy.contains('Add item').click();
    cy.get('input').type('helado');
    cy.get('[data-cy=modal]').within(() => {
        cy.get('button').last().click();
    })
    cy.wait(600)
    cy.contains('helado');
    cy.wait(1000)
  })
  describe('after Add item', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.contains('Add item').click();
        cy.get('input').type('limon');
        cy.get('[data-cy=modal]').within(() => {
            cy.get('button').last().click();
        })
    })
    it('Edit Item', () => {
        cy.contains('limon').parent().within(() => {
          cy.get('button').first().click()
        })
        cy.contains('Edit item').parent().within(() => {
          cy.get('input').type('es');
          cy.get('button').last().click();
        });
        cy.wait(1000)
        cy.contains('limones');
    })
    it('Delete Item', () => {
      cy.contains('limon').parent().within(() => {
          cy.get('button').last().click()
        })
      cy.wait(1000)
      cy.contains('limon').should('not.exist');
    })
  })
})
