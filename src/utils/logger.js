const moment = require('moment');

const colors = {
	green: '\x1b[32m',
	yellow: '\x1b[33m%s\x1b[0m',
	red: '\x1b[31m',
	cyan: '\x1b[36m',
	blue: '\x1b[34m',
	default: ''
};
module.exports = function(message, color = 'default') {
	// Logs in BD time UTC+6
	let tm = moment()
		.utc()
		.add(6, 'hours')
		.format('DDMMMYY_h:mA');
	console.log(colors[color.toLowerCase()] || '', `[${tm}] ${message}`);
};
