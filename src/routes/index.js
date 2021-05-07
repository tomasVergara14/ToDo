var express = require('express');
var router = express.Router();
const taskController = require('../controllers/taskController')

/* GET home page. */
router.get('/', taskController.index);
router.post('/', taskController.create)

module.exports = router;
