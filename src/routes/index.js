var express = require('express');
var router = express.Router();
const taskController = require('../controllers/taskController')

/* GET home page. */
router.get('/', taskController.index);
router.post('/', taskController.create)

//Detail 
router.get('/detail/:id',taskController.detail)

module.exports = router;
