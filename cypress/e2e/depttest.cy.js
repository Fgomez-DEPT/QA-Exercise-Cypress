describe('QA testing spec', () => {
    it('passes', () => {
        cy.intercept('GET', 'rockets').as('rockets')
        cy.visit('https://csb-x6dpt1.netlify.app/');

        cy.get('@rockets').should((req) => {
        console.log(req.response.body)
      })
      
    })
  })
