'use strict';
const { Model, DataTypes } = require('sequelize');

class Veiculos extends Model {
  static init(sequelize) {
    super.init({
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
        field:"id"
      },
      placa: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        field:"placa"
      },
      chassi:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        field:"chassi"
      },
      renavam: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        field:"renavam"
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"modelo"
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"marca"
      },
      ano: {
        type: DataTypes.DATE,
        allowNull: false,
        field:"ano"
      },
    }, {
      sequelize,
      modelName: 'Veiculos',
      tableName: "veiculos"
    })
  }
}

module.exports = Veiculos