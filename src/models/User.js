const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required!'],
			trim: true,
		},
		email: {
			type: String,
			unique: 'Email Address is Already Registered!',
			required: [true, 'Email is required!'],
			trim: true,
			lowercase: true,
		},
		phone: {
			type: String,
			required: [true, 'Phone number is required!'],
			trim: true,
		},
		role: {
			type: String,
			default: 'user',
			enum: ['admin', 'merchant', 'user'],
		},
		status: {
			type: String,
			default: 'pending',
			enum: ['pending', 'verified', 'blocked'],
		},
		profileImage: String,
		password: {
			type: String,
			required: [true, 'Password is required!'],
			minlength: [6, 'Password should be greater than or equal 6 character!']
		},
	},
	{ timestamp: true }
);

UserSchema.pre('save', async function (next) {
	const user = this;
	const hash = await bcrypt.hash(user.password, 10);
	this.password = hash;
	next();
});

UserSchema.methods.isValidPassword = async function(password) {
	const user = this;
	const compare = await bcrypt.compare(password, user.password);
	return compare;
};

UserSchema.plugin(require('mongoose-beautiful-unique-validation'));


module.exports =  mongoose.model('User', UserSchema);
