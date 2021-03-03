describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('/');

        cy.contains('Devices');
        cy.contains('Reservations');

        cy.contains('Reservations').click();

        cy.pause();

        cy.url().should('include', '/reservations')


        cy.contains('Add').click()

        cy.pause();


        cy.contains('Save').click()
    })
})