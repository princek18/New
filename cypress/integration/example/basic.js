describe("first-test", function(){
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it("check", () => {
        cy.get(".fifth").click()
        cy.get("button").click()
    })
})