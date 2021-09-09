const  {createResponse}   =   require('../utils/responseGenerate');
const Store   		  =   require('../models/Store');
const Product   		  =   require('../models/Product');
const Order   		  =   require('../models/Order');

module.exports.getProducts = async (req, res, next) => {
	try{
		const query = req.query;
		const store = await Store.findOne({owner: req.user._id});
		const products = await Product.find({...query, store: store._id});
		return res.json(createResponse(products));
	} catch(err){
		next(err);
	}
};

module.exports.getStats = async (req, res, next) => {
	try{
		const query = req.query;
		const store = await Store.findOne({owner: req.user._id});
		const totalProduct = await Product.countDocuments({...query, store: store._id});
		const totalOrder = await Order.countDocuments();

		return res.json(createResponse({totalProduct, totalOrder}));
	} catch(err){
		next(err);
	}
};

