const mongoose      =   require('mongoose');
const {Schema}      =   mongoose;
mongoose.Promise    =   global.Promise;

const CategorySchema    =   new Schema ({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	slug: {
		type: Number,
		required: true
	}
}, {timestamp: true});

module.exports = mongoose.model('Category', CategorySchema);