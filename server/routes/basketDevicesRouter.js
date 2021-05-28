const Router = require("express");
const router = new Router();
const basketDeviceController = require("../controllers/basketDevicesController");

router.post("/", basketDeviceController.create);
router.get("/", basketDeviceController.getAll);
router.delete("/", basketDeviceController.delete);

module.exports = router;
