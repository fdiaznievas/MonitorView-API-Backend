'use strict';

const { NOVEDAD_TABLE, NovedadSchema } =  require("./../models/novedad.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn(NOVEDAD_TABLE, 'caseId')
  },

  async down (queryInterface) {
    await queryInterface.addColumn(NOVEDAD_TABLE, 'caseId', NovedadSchema.caseId)
  }
};
