const URL = '172.18.120.25:8080/clase-6-tarea-1-FS.html';

context('Formulario 1', () => {
  before(() => {
    cy.visit(URL);
  });

  describe('Dispone el formulario', () => {
    const INPUT_CANTIDAD_INTEGRANTES = 1;
    const BOTONES = 3;

    it('se asegura que haya un input para la cantidad de integrantes', () => {
      cy.get('#calculador-edades')
        .find('#cantidad-integrantes')
        .should('have.length', INPUT_CANTIDAD_INTEGRANTES);
    });

    it('se asegura que esten los tres botones', () => {
      cy.visit(URL);
      cy.get('#calculador-edades')
        .find('button')
        .its('length')
        .should('eq', BOTONES);
    });

    it('se asegura que no este visible el analisis de las edades', () => {
      cy.visit(URL);
      cy.get('#analisis').should('not.be.visible', 'La edad mayor es:');
    });
  });
});
