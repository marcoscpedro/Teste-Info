'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      chassi: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      renavam: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('veiculos');
  }
};