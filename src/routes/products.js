const express = require('express');
const productController = require('../controllers/products');

const router = express.Router();

router.post('/', productController.create);
router.get('/',productController.getAll);
router.get('/:productParams',productController.getByIdOrName);
router.put('/:id',productController.edit);
router.delete('/:id',productController.deleteProduct);

module.exports = router;