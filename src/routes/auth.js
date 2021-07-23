const router    =   require('express').Router();
const authController    =   require('../controllers/authController');
const errorHandler   =   require('../middlewares/errors');
const accessControl = require('../accessControl');
const passport = require('passport');

router.post('/signup', authController.signUp, errorHandler);
router.post('/login', authController.login);
router.get(
	'/auth-user',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('readOwn', 'profile'),
	authController.authUser
);

module.exports = router;