describe('QA testing spec', () => {
    it('passes', () => {
        cy.intercept('GET', 'https://api.spacexdata.com/v3/rockets').as('rockets')
        cy.visit('https://csb-x6dpt1.netlify.app/');

        cy.get('@rockets').should((req) => {
        console.log(req.response.body)
      })
      
    })
  })