const Veiculos = require("../models/veiculos")

module.exports = {

    async create (req, res){
        const data = req.body
        var veiculo
        try {
            veiculo = await Veiculos.create(data)    
        } catch (error) {
            return res.send(error).status(500)
        }
        return res.send('Veiculo criado').status(200)
    },

    async read (req, res) {
        const { id } = req.params
        var veiculo
        try {
            veiculo = await Veiculos.findByPk(id)
        } catch (error) {
            return res.send(error).status(500)
        }
        return res.send(veiculo).status(200)
    },

    async update (req, res) {
        const { id } = req.param
        const data = req.body
        var veiculo
        try {
            veiculo = await Veiculos.update(
                data,
                {
                    where: {
                        id:id
                    }
                }
            )
        } catch (error) {
            return res.send(error).status(500)
        }
        return res.send('Veiculo atualizado').status(200)
    },

    async delete (req, res) {
        const { id } = req.param
        try {
            await Veiculos.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            return res.send(error).status(500)
        }
        return res.send('Veiculo deletado').status(200)
    }

}