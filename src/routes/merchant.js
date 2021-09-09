const router    =   require('express').Router();
const merchantController    =   require('../controllers/merchantController');
const accessControl = require('../accessControl');
const passport = require('passport');

router.get(
	'/products',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('createOwn', 'product'),
	merchantController.getProducts
);

router.get(
	'/stats',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('createOwn', 'product'),
	merchantController.getStats
);

module.exports = router;