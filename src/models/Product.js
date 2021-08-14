const mongoose      =   require('mongoose');
const {Schema}      =   mongoose;
mongoose.Promise    =   global.Promise;

const ProductSchema    =   new Schema ({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	store: {
		type: Schema.Types.ObjectId,
		ref: 'Store',
		required: true,
	},
	
}, {timestamp: true});

module.exports = mongoose.model('Product', ProductSchema);