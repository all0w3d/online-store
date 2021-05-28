const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError');


class BasketDeviceController {
    async create(req, res) {
        const {deviceId, basketId} = req.body
        const basketDevice = await BasketDevice.create({deviceId, basketId})
        return res.json(basketDevice)
    }

    async getAll(req, res) {
        const basketDevice = await BasketDevice.findAll()
        return res.json(basketDevice)
    }

    async delete(req, res) {
        const basketDevice = await BasketDevice.destroy({truncate: true })
        return res.json(basketDevice)
    }

}


module.exports = new BasketDeviceController()
