//1. Arrange
//2. Act
//3. Assert

//MVP:
// Get the Name input and type a name in it.
//  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//  Get the Email input and type an email address in it
//  Get the password input and type a password in it
//  Set up a test that will check to see if a user can check the terms of service box
//  Check to see if a user can submit the form data
//  Check for form validation if an input is left empty

describe('Testing Form Inputs', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000/')
    })
    it("Inputs a name into the name input", () => {
        cy
        .get("[data-cy=Name]")
        .type("Damon Bogich")
        .should('have.value', "Damon Bogich")
        .clear()
        cy.contains("name is a required field")
    })
    it("Inputs an email into the email input", () => {
        cy.get("[data-cy=Email]")
        .type("damonbogich@gmail.com")
        .should('have.value', "damonbogich@gmail.com")
    })
    it("Inputs a password into the password input", () => {
        cy.get("input[name='Password']")
        .type("badpassword")
        .should('have.value', "badpassword")
    })
    it("Checks the checkbox", () => {
        cy.get("input[type='checkbox']").check().should("be.checked")
    })
    it("Submits the Form", () => {
        cy.get('form').submit()
    })
})