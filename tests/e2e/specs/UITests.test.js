describe('Visit App, Get Commits List', function() {
  it('Gets, and asserts', function() {
    
    // Visit Root URL'
    cy.visit('http://localhost:8080/')

    //Clicks commits to display list view
    cy.contains('Commits').click({force: true})

    // Should be on a new URL which includes '/commits'
    cy.url().should('include', '/commits')

     //Clicks search by contributer filter
     cy.get('.v-select__selections').click()
    
     //Selects contributer from dropdown list
    cy.contains('KaelWD').click({force: true})

    //Asserts and verifies table is filtered to selected contributor by name and hash
    cy.get('.v-table__overflow').should('contain','KaelWD84b39d313c4c3fef89c42d59b154ebf2d900cdc2')
    
    //reloads page to verifies filter persist
    cy.reload()

    //Asserts and verifies table is filtered to selected contributor after page reload
    cy.get('.v-table__overflow').should('contain','KaelWD84b39d313c4c3fef89c42d59b154ebf2d900cdc2')

    //Clears contributer filter
    cy.get('.v-input__icon--clear').click()

    //Asserts and verifies filter has been cleared and table is no longer filtered 
    cy.get('.v-table__overflow').should('contain','johnleider243a7c34a1c58dff3753ad35dded13ba5002c8eb')

    
    //Gets and types hash into SHA filter
    cy.get('.v-text-field__slot')
        .type('ddb90b1c0654f6142773e428391926e86ebc2ef6')

    //Asserts and verifies table is filtered by name and SHA 
    cy.get('.v-table__overflow').should('contain','Darkside73ddb90b1c0654f6142773e428391926e86ebc2ef6') 

    //Clears SHA filter 
    cy.get('input[type="text"]').clear({force: true}) 
    
    //Sorts and asserts ascending class for Authors
    cy.contains('Author').click().should('have.class','column sortable active asc text-xs-left')

    //Sorts and asserts ascending class for Authors
    cy.contains('Author').click().should('have.class','column sortable active desc text-xs-left')

    //Sorts and asserts descending class for Commit Message
    cy.contains('Commit Message').click().should('have.class','column sortable active asc text-xs-left')

    //Sorts and asserts descending class for Commit Message
    cy.contains('Commit Message').click().should('have.class','column sortable active desc text-xs-left')

    //Tests Next and Previous pagination functionality
    cy.contains('Next').click()
    .wait(2000)
    cy.contains('Previous').click()

    //Clicks and opens Details page based on SHA HASH
    cy.contains('243a7c34a1c58dff3753ad35dded13ba5002c8eb').click()

    // Asserts details page based on URL
    cy.url().should('include', '/243a7c34a1c58dff3753ad35dded13ba5002c8eb?page=1&per_page=10')

    //Verify avatar image is visible
    cy.get('.v-avatar').should('be.visible')

    //Verify page contains text
    cy.get('.v-card__text').should('contain.text','John Leider Total AdditionsTotal DeletionsTotal Overall+1-12All Files Changedpackages/docs/src/lang/en/customization/SassVariables.json')
    
    //Clicks back button to list view
    cy.get('.v-btn__content').click()
   
  
    //Auth with git hub
    //cy.get('.v-btn').click()

    //cy.get('.login_field')
    //.type(Cypress.env('benneilson0226@gmail.com'))

    //Verify pricing details
    //cy.get('.container').invoke('text').should('contain','Auth')

    

    //Verify image is visible
    //cy.get('.style__Image-fxrvoo-2').should('be.visible')

     //Verify pricing
    //cy.get('.style__Container-sc-1yj7jeu-1').invoke('text').should('contain','$5/month')

     //Verify pricing details
     //cy.get('.style__Container-sc-15in1n8-0').invoke('text').should('contain','24 months')

    //Verify term and conditions
    //cy.contains('View terms and conditions').click()
    
    
    //Verify Legal copy
    //cy.get('.List__StyledListItem-ju21tg-0').invoke('text').should('contain','Offer subject to change without notice')

    //cy.contains('Select an Internet plan').click({force: true})
       //.wait(4000)

   
     

    

      
    
   

  })
})
