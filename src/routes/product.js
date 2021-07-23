const router    =   require('express').Router();
const productController    =   require('../controllers/productController');
const accessControl = require('../accessControl');
const passport = require('passport');
const uploader = require('../lib/multer');

router.post('/', 
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('readOwn', 'product'),
	uploader.single('image'),
	productController.createProduct
);

router.delete('/:id',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('deleteOwn', 'product'), productController.deleteProduct
);

router.get(
	'/:id',
	productController.getProductById
);

router.get(
	'/',
	productController.getProducts
);

module.exports = router;