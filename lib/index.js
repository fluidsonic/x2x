'use strict';

var File = require('fs');
var Path = require('path');


File.readdirSync(Path.join(__dirname, 'libraries'))
	.forEach(function(fileName) {
		if (Path.extname(fileName) === '.js') {
			var id = Path.basename(fileName, '.js');
			exports[id] = require('./libraries/' + id);
		}
	});
