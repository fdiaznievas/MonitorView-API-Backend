'use strict';

const { ZABBIX_TABLE, ZabbixSchema } =  require("./../models/zabbix.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(ZABBIX_TABLE, 'update_at', ZabbixSchema.updatedAt)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(ZABBIX_TABLE, 'update_at')
  }
};
