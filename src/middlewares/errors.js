const _log                        = require('../utils/logger');
const {createResponse}            = require('../utils/responseGenerate');

module.exports = function(err,req,res, next){
	if(err){
		let statusCode = 500;
		if (err.name == 'ValidationError') {
			statusCode = 400;
		}
		const errorPaths =  Object.keys(err.errors || {});
		const errorMessages = errorPaths.map((path) => err.errors[path].properties.message);
		const errorMessage = errorMessages.join(', ') || err.message;
		_log(`Error: ${req.method} request from ${req.ip} on route ${req.path}`,'red');
		
		res
			.status(statusCode)
			.json(createResponse(
				null,
				errorMessage,
				true)
			);
	}
};
