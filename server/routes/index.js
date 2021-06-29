const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const ratingRouter = require('./ratingRouter')
const basketRouter = require('./basketRouter')
const basketDeviceRouter = require('./basketDevicesRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/rating', ratingRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)
router.use('/basket_devices', basketDeviceRouter)

module.exports = router
