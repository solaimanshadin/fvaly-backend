const  {createResponse}   =   require('../utils/responseGenerate');
const cloudinary   		  =   require('../lib/cloudinary');
const Product   		  =   require('../models/Product');


module.exports.createProduct = async (req, res, next) => {
	try{
		const body = req.body;
		const upload = await cloudinary.uploader.upload(req.file.path);

		body.image = upload.public_id;
		const product = new Product(body);
		await product.save();
		return res.status(201).json(createResponse(product, 'Product Added successfully!', false));
	} catch(err) {
		next(err);
	}
};

module.exports.deleteProduct = async (req, res, next) => {
	try{
		const { id } = req.params;
		const product = await Product.deleteOne({_id: id});
		if(product.deletedCount) {
			return res.status(200).json(createResponse(null, 'Product Deleted successfully!', false));
		}
		return res.status(404).json(createResponse(null, 'No Product found with this Id!', true));
	} catch(err) {
		next(err);
	}
};
/**
 * Get Product By Id
 * @function
 * @param {req}
 */ 
module.exports.getProductById = async (req, res, next) => {
	try{
		const { id } = req.params;
		const product = await Product.findOne({_id: id});
		if(!product) throw new Error('No product found with this id!');
		return res.json(createResponse(product));
	} catch(err){
		next(err);
	}
};

module.exports.getProducts = async (req, res, next) => {
	try{
		const query = req.query;
		const products = await Product.find(query);
		return res.json(createResponse(products));
	} catch(err){
		next(err);
	}
};


