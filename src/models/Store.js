const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const StoreSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		location: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: true,
		},
		ownerId: {
			type: Schema.Types.ObjectId,
			ref: 'Owner',
			required: true,
		},
		status: {
			type: String,
			default: 'pending',
			enum: ['pending', 'verified', 'blocked'],
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model('Store', StoreSchema);
