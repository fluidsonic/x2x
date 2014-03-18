'use strict';

var assert = require('assert');


module.exports = function compare(actual, expected, tolerance) {
	if (tolerance === undefined) {
		tolerance = 2.2204460492503130808472633361816e-16;
	}

	assert(typeof expected === 'number');
	assert(typeof tolerance === 'number');

	if (typeof actual !== 'number') {
		throw new Error('Expected ' + actual + ' to be a number.');
	}
	if (Math.abs(actual - expected) > tolerance) {
		throw new Error('Expected ' + actual + ' to be near ' + expected + ' with tolerance ' + tolerance + ' (difference is ' + Math.abs(actual - expected) + ')');
	}
};
