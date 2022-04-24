const express = require("express");
const router = express.Router();

//INDEX CONTROLLER
const index_controller = require('../controllers/index_controller');

//display homepage on GET
router.get("/", index_controller.homepage);


module.exports = router;