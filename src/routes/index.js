const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/product', require('./product'));
router.use('/store', require('./store'));
router.use('/category', require('./category'));
router.use('/order', require('./order'));

module.exports = router;
