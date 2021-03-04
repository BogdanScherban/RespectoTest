import moment from 'moment';

describe('Reservations page', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.visit('/reservations');
    });

    it('Check tabs navigation', () => {

        cy.contains('Devices');
        cy.contains('Devices').click();

        cy.contains('Reservations');
        cy.contains('Reservations').click();

        cy.url().should('include', '/reservations');

        cy.contains('Devices').click();
    });

    it('Current data changing', () => {
        cy.get('[data-cy=currentData]').should('have.text', moment().format('ll'));
        cy.get('[data-cy=Previous]').click().then(el => {
            cy.get('[data-cy=currentData]').should('have.text', moment().subtract(1, 'days').format('ll'));
            cy.get('[data-cy=Next]').dblclick().then(next => {
                cy.get('[data-cy=currentData]').should('have.text', moment().add(1, 'days').format('ll'));
            });
        });
    });

    it('Form toggling testing', () => {
        cy.contains('Add').click();

        cy.contains('Back');
        cy.contains('Back').click();

        cy.contains('Add');
    });

    it('Reservations displaying', () => {
        cy.contains('Add').click();
        cy.wait(3000);

        cy.get('[data-cy=deviceSelector]').click();

        cy.get('[aria-labelledby=deviceSelectorLabel]').children().should('have.length', 3);
        cy.get('[aria-labelledby=deviceSelectorLabel]').first().click();
        cy.contains('Save').click();

        cy.wait(3000);

        cy.contains('Add');
    });

});