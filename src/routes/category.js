const router    =   require('express').Router();
const categoryController    =   require('../controllers/categoryController');
const accessControl = require('../accessControl');
const passport = require('passport');

router.post('/', 
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('createOwn', 'category'),
	categoryController.createCategory
);

router.delete('/:id',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('deleteOwn', 'category'), categoryController.deleteCategory
);

router.get(
	'/:id',
	categoryController.getCategoryById
);

router.get(
	'/',
	categoryController.getCategorys
);

module.exports = router;