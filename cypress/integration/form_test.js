describe("Can add text to special instructions", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Should return text in textarea", function () {
    cy.get('input[name="specialInstructions"]')
      .type("This is a test to see if text will go into here")
      .should("have.value", "This is a test to see if text will go into here");
    cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=topping1]")
      .click()
      .should("have.value", "on")
    cy.get("[data-cy=topping2]")
      .click()
      .should("have.value", "on")
    cy.get("[data-cy=topping3]")
      .click()
      .should("have.value", "on")
  });
});
