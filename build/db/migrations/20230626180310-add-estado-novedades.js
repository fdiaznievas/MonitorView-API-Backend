'use strict';

const { NOVEDAD_TABLE, NovedadSchema } =  require("./../models/novedad.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(NOVEDAD_TABLE, 'estado', NovedadSchema.estado)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(ZABBIX_TABLE, 'update_at')
  }
};
