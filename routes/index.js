var express = require('express');
var router = express.Router();
const groceryController = require('../controllers/groceryController')

/* GET home page. */
router.get('/', groceryController.showGroceries);
router.post('/groceries', groceryController.addGrocery)
router.delete('/groceries/:id', groceryController.deleteGrocery)

module.exports = router;
