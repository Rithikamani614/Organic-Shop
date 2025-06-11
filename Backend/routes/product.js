const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);


// router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images'), newProduct);
// router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);

module.exports = router;




