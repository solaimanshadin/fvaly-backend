const  {createResponse}   =   require('../utils/responseGenerate');
const Category   		  =   require('../models/Category');


module.exports.createCategory = async (req, res, next) => {
	try{
		const body = req.body;

		const category = new Category(body);
		await category.save();
		return res.status(201).json(createResponse(category, 'Category Added successfully!', false));
	} catch(err) {
		next(err);
	}
};

module.exports.deleteCategory = async (req, res, next) => {
	try{
		const { id } = req.params;
		const category = await Category.deleteOne({_id: id});
		if(category.deletedCount) {
			return res.status(200).json(createResponse(null, 'Category Deleted successfully!', false));
		}
		return res.status(404).json(createResponse(null, 'No Category found with this Id!', true));
	} catch(err) {
		next(err);
	}
};

module.exports.getCategoryById = async (req, res, next) => {
	try{
		const { id } = req.params;
		const category = await Category.findOne({_id: id});
		if(!category) throw new Error('No category found with this id!');
		return res.json(createResponse(category));
	} catch(err){
		next(err);
	}
};

module.exports.getCategorys = async (req, res, next) => {
	try{
		const query = req.query;
		const categorys = await Category.find(query);
		return res.json(createResponse(categorys));
	} catch(err){
		next(err);
	}
};
