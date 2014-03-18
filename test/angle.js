'use strict';

var compare = require('./helpers/compare');
var angle = require('../lib').angle;


describe('Angle Units', function() {

	it('#degreesToRadians()', function() {
		compare(angle.degreesToRadians(1), 0.0174532925, 0.0000000001);
		compare(angle.deg2rad(1),          0.0174532925, 0.0000000001);
	});

	it('#radiansToDegrees()', function() {
		compare(angle.radiansToDegrees(1), 57.2957795130, 0.0000000001);
		compare(angle.rad2deg(1),          57.2957795130, 0.0000000001);
	});
});
