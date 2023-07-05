'use strict';

const { NOVEDAD_TABLE, NovedadSchema } =  require("./../models/novedad.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(NOVEDAD_TABLE, 'cid', NovedadSchema.cid)
  },

  async down (queryInterface) {
    await queryInterface.changeColumn(NOVEDAD_TABLE, 'cid', NovedadSchema.cid)
  }
};
