const router    =   require('express').Router();
const orderController    =   require('../controllers/orderController');
const accessControl = require('../accessControl');
const passport = require('passport');

router.post('/', 
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('createOwn', 'order'),
	orderController.createOrder
);

router.delete('/:id',
	passport.authenticate('jwt', { session: false }),
	accessControl.grantAccess('deleteOwn', 'order'), orderController.deleteOrder
);

router.get(
	'/:id',
	orderController.getOrderById
);

router.get(
	'/',
	orderController.getOrders
);

module.exports = router;