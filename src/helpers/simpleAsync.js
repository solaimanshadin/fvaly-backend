module.exports = async function(_promise) {
	// this promise will always resolve, so that there's no try catch needed
	return new Promise((resolve, reject) => {
		_promise
			.then(f => {
				resolve([null, f]);
			})
			.catch(e => {
				resolve([e, null]);
			});
	});
};