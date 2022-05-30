const chai = require('chai')
const sinon = require('sinon')
const veiculoController = require('../src/controllers/veiculosController')
const {expect} = chai
const Veiculos = require("../src/models/veiculos")
const { stub, assert } = sinon


const mockResponse = () => {
    const res = {};
    res.send = sinon.stub().returns(res);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    return res;
  };

const mockRequest = {
    params: {
        id: 1
    },
    body: {
        id: 1
    }
}

const res = mockResponse()

describe('Index', () => {
    it("Index function should be defined", () => {
        expect(veiculoController.index).to.exist
    })

    it("Index should return status 200", async () => {
        const veiculoModelMock = stub(Veiculos,'findAll').returns({id:1})
        const result = await veiculoController.index(mockRequest, res)
        sinon.assert.calledWith(res.status, 200)
    })

    it("Index should return status 500", async () => {
        const veiculoModelMock = stub(Veiculos, 'findAll').throws()
        const result = await veiculoController.index(mockRequest, res)
        sinon.assert.calledWith(res.status, 500)
    })


    afterEach(function () {
        sinon.restore();
    })

})


describe("Create", () => {
    it("Create function should be defined", () => {
        expect(veiculoController.create).to.exist
    })

    it("Create should return status 200", async () => {
        const veiculoModelMock = sinon.stub(Veiculos, "create").returns({id:1})
        
        const result = await veiculoController.create(mockRequest, res)
        sinon.assert.calledWith(res.status, 200)
    })

    it("Create should return status 500", async () => {
        const veiculoModelMock = sinon.stub(Veiculos, 'create').throws()
        const result = await veiculoController.create(mockRequest, res)
        sinon.assert.calledWith(res.status, 500)
    })

    afterEach(function () {
        sinon.restore();
    })
})



describe('GetById', async () =>{
    it("GetById Function Should be defined", () => {
        expect(veiculoController.read).to.exist      
    })

    it("GetById should return status 200", async () => {
        const veiculoModelMock = sinon.stub(Veiculos,'findByPk').returns({id:1})
        const result = await veiculoController.read(mockRequest,res)
        sinon.assert.calledWith(res.status, 200)
    })

    it("GetById should return status 500", async () => {
        const veiculoModelMock = sinon.stub(Veiculos, 'findByPk').throws()
        const result = await veiculoController.read(mockRequest, res)
        sinon.assert.calledWith(res.status, 500)
    })

    afterEach(function () {
        sinon.restore();
    })

})

describe("Update", () => {
    it('Update function should be defined', () => {
        expect(veiculoController.update).to.exist
    })

    it("Update Function should return 200", async () => {
        const veiculoModelMock = stub(Veiculos, 'update').returns({id:1})
        const result = await veiculoController.update(mockRequest, res)
        sinon.assert.calledWith(res.status, 200)
    })

    it("Update Function should return 500", async () => {
        const veiculoModelMock = stub(Veiculos, 'update').throws()
        const result = await veiculoController.update(mockRequest, res)
        sinon.assert.calledWith(res.status, 500)
    })
    afterEach(function () {
        sinon.restore();
    })
})

describe("Delete", () => {

    it("Delete Function Should be defined", () => {
        expect(veiculoController.delete).to.exist
    })

    it("Delete Function Should return 200", async () => {
        const veiculoModelMock = stub(Veiculos, 'destroy').returns("Veiculo Deletado")
        const result = await veiculoController.delete(mockRequest, res)
        assert.calledWith(res.status, 200)        
    })

    it("Delete Function Should return 500", async () => {
        const veiculoModelMock = stub(Veiculos, 'destroy').throws()
        const result = await veiculoController.delete(mockRequest, res)
        assert.calledWith(res.status, 500)
    })

    afterEach(function () {
        sinon.restore();
    })
})


