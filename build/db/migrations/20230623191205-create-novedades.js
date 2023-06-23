'use strict';

const { NovedadSchema, NOVEDAD_TABLE } = require('./../models/novedad.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(NOVEDAD_TABLE, NovedadSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(NOVEDAD_TABLE);
  }
};
