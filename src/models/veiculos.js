'use strict';
const { Model, DataTypes } = require('sequelize');

class Veiculos extends Model {
  static init(sequelize) {
    super.init({
      placa: DataTypes.STRING,
      chassi: DataTypes.STRING,
      renavam: DataTypes.STRING,
      modelo: DataTypes.STRING,
      marca: DataTypes.STRING,
      ano: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Veiculos',
    })
  }
}

module.exports = Veiculos