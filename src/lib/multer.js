const multer = require('multer');
const path = require('path');

/** Storage Engine */
var storage = multer.diskStorage({
});

//init

var validateFile = function (file, cb) {
	let allowedFileTypes = /jpeg|jpg|png/;
	const extension = allowedFileTypes.test(
		path.extname(file.originalname).toLowerCase()
	);
	const mimeType = allowedFileTypes.test(file.mimetype);
	if (extension && mimeType) {
		return cb(null, true);
	} else {
		cb('Invalid file type. Only JPEG, PNG file are allowed.');
	}
};

const uploader = multer({
	storage: storage,
	limits: { fileSize: 800000 },
	fileFilter: function (req, file, callback) {
		validateFile(file, callback);
	},
});

module.exports = uploader;
