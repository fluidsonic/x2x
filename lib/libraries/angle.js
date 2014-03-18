'use strict';

var DEGREES__PER__RADIAN = 180 / Math.PI;
var RADIANS__PER__DEGREE = Math.PI / 180;


module.exports = exports = {

	degreesToRadians:  function(degrees) { return degrees * RADIANS__PER__DEGREE; },
	radiansToDegrees:  function(radians) { return radians * DEGREES__PER__RADIAN; },

};

exports.deg2rad = exports.degreesToRadians;
exports.rad2deg = exports.radiansToDegrees;
