const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (function () {
	ac.grant('user').readOwn('profile').updateOwn('profile').createOwn('order');
	ac.grant('merchant').extend('user').readAny('profile');
	ac.grant('admin').readAny('profile').updateAny('profile');

	ac.grant('merchant')
		.extend('user')
		.createOwn('product')
		.updateOwn('product')
		.readAny('product')
		.createOwn('store')
		.updateOwn('store')
		.deleteOwn('store')
		.updateOwn('order');

	ac.grant('admin')
		.extend('user')
		.extend('merchant')
		.createAny('category')
		.readAny('product')
		.updateAny('product')
		.deleteAny('product')
		.createAny('user')
		.readAny('user')
		.updateAny('user')
		.deleteAny('order')
		.readAny('order');

	return ac;
})();