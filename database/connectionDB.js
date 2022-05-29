const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('infoDB', 'marcos', '159asd951', {
    host: 'localhost',
    dialect:"mysql"
  })

  try {
      sequelize.authenticate()
      console.log("Conexão feita com sucesso")
  } catch (error) {
      console.log(error)
  }

