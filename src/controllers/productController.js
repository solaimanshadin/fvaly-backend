const  {createResponse}   =   require('../utils/responseGenerate');
const cloudinary   		  =   require('../lib/cloudinary');
const Product   		  =   require('../models/Product');


module.exports.createProduct = async (req, res, next) => {
	try{
		const body = req.body;
		const upload = await cloudinary.uploader.upload(req.file.path);
		
		body.image = upload.public_id;
		const user = new Product(body);
		await user.save();
		return res.status(201).json(createResponse(user, 'Product Added successfully!', false));
	} catch(err) {
		console.log('err', err);
		next(err);
	}
};

module.exports.deleteProduct = async (req, res, next) => {
	try{
		const { id } = req.params;
		const user =  Product.deleteOne({_id: id});
		return res.status(200).json(createResponse(user, 'Product Deleted successfully!', false));
	} catch(err) {
		next(err);
	}
};

module.exports.getProductById = async (req, res, next) => {
	try{
		const { id } = req.params.id;
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
