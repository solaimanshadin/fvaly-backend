const router    =   require('express').Router();
const dashboardController    =   require('../controllers/dashboardController');
const accessControl = require('../accessControl');
const passport = require('passport');

router.get(
	'/stats',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('createOwn', 'category'),
	dashboardController.getDashboardStats
);

module.exports = router;