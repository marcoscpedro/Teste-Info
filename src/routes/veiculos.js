var express = require('express');
var router = express.Router();
const veiculosController = require('../controllers/veiculosController')

router.post('/veiculo', veiculosController.create)
router.get('/veiculo/:id', veiculosController.read)
router.put('/veiculo/:id', veiculosController.update)
router.delete('/veiculo/:id', veiculosController.delete)

module.exports = router;
