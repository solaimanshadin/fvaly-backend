const router    =   require('express').Router();
const storeController    =   require('../controllers/storeController');
const accessControl = require('../accessControl');
const passport = require('passport');
const uploader = require('../lib/multer');

router.post('/', 
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('createOwn', 'store'),
	uploader.single('image'),
	storeController.createStore
);

router.delete('/:id',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('deleteOwn', 'store'), storeController.deleteStore
);

router.get(
	'/:id',
	storeController.getStoreById
);

router.get(
	'/',
	storeController.getStores
);



module.exports = router;