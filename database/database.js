const Sequelize = require('sequelize')
const dbConfig = require("../config/config")

const Veiculos = require("../src/models/veiculos")

const connection = new Sequelize(dbConfig)

try {
    connection.authenticate()
    console.log('Conexão estabelecida com sucesso!')
} catch (error) {
    console.log(error)
}

Veiculos.init(connection)
module.exports = connection