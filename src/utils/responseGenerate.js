module.exports.createResponse = (data, message = null, error = false, token = null) => {
	return {
		error,
		data,
		message,
		token
	};
};