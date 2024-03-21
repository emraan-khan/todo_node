const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);

router.post('/create_todo',homeController.create);

router.put('/updateDoc',homeController.update)

module.exports = router;