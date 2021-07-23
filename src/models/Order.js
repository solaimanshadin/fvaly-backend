const mongoose      =   require('mongoose');
const {Schema}      =   mongoose;
mongoose.Promise    =   global.Promise;

const OrderSchema    =   new Schema ({
	userId: {
		type: String,
		required: true,
		trim: true,
	},
	products: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		default: 'pending',
		enum: ['pending', 'verified', 'delivered', 'rejected']
	},
	totalAmount: Number
}, {timestamp: true});

module.exports = mongoose.model('Order', OrderSchema);