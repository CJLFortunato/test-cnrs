

describe("Adding new topics to the saved topics list", () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
      });

    it("user can add new topics to their profile", () => {

        let oldSavedTopics;
        cy.get('[data-testid=saved-btn]').then($savedTopics => oldSavedTopics = $savedTopics);
        
        
        //1) Click on topics in the list => check that the button toggles between active and inactive state
        let geoButton = cy.get('[data-testid=topic-btn]').contains('geo').should('have.text', 'geo');
        geoButton.should('have.class', 'inactive');
        geoButton.then($btn => $btn.click());
        geoButton.should('have.class', 'active');

        let scipoButton = cy.get('[data-testid=topic-btn]').contains('scipo').should('have.text', 'scipo');
        scipoButton.should('have.class', 'inactive');
        scipoButton.then($btn => $btn.click());
        scipoButton.should('have.class', 'active');
        //2) Click save button

        cy.get('.save-btn').click(); //Will work when you make it responsive
        
        //3) Check that the selected topics disappear from the topic list and appear in the saved topics component

    });
})