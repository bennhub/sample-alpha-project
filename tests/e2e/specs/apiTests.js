
describe('API Validations Tests', () => {
    var result
    
    it('Validate the header', () => {
       result = cy.request('http://localhost:8080/')
      
       result.its('headers')
             .its('content-type')
             .should('include', 'text/html')
        
    })

    it('Validate the status', () => {
        result = cy.request('http://localhost:8080/')
        result = cy.request('http://localhost:8080/commits')
        result = cy.request('https://api.github.com/repos/vuetifyjs/vuetify/contributors')
        
       
        result.its('status')
              .should('equal',200);
     })

     it('Validate the body and rate limit ', () => {
        result = cy.request('https://api.github.com/rate_limit')
       
        result.its('body')
              .its('rate')
              .its('limit')
              .should('equal', 60);
   
        
                 
     })
}) 