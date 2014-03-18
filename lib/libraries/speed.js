'use strict';

var KILOMETERS_PER_HOUR__PER__KNOT          = 1.852;
var KILOMETERS_PER_HOUR__PER__MILE_PER_HOUR = 1.609344;
var MILES_PER_HOUR__PER__KILOMETER_PER_HOUR = 1 / KILOMETERS_PER_HOUR__PER__MILE_PER_HOUR;
var MILES_PER_HOUR__PER__KNOT               = KILOMETERS_PER_HOUR__PER__KNOT * MILES_PER_HOUR__PER__KILOMETER_PER_HOUR;
var KNOTS__PER__MILE_PER_HOUR               = 1 / MILES_PER_HOUR__PER__KNOT;
var KNOTS__PER__KILOMETER_PER_HOUR          = 1 / KILOMETERS_PER_HOUR__PER__KNOT;


module.exports = exports = {

	kilometersPerHourToKnots:        function(kilometersPerHour) { return kilometersPerHour * KNOTS__PER__KILOMETER_PER_HOUR; },
	kilometersPerHourToMilesPerHour: function(kilometersPerHour) { return kilometersPerHour * MILES_PER_HOUR__PER__KILOMETER_PER_HOUR; },
	knotsToKilometersPerHour:        function(knots)             { return knots * KILOMETERS_PER_HOUR__PER__KNOT; },
	knotsToMilesPerHour:             function(knots)             { return knots * MILES_PER_HOUR__PER__KNOT; },
	milesPerHourToKilometersPerHour: function(milesPerHour)      { return milesPerHour * KILOMETERS_PER_HOUR__PER__MILE_PER_HOUR; },
	milesPerHourToKnots:             function(milesPerHour)      { return milesPerHour * KNOTS__PER__MILE_PER_HOUR; },

};

exports.kmh2kn  = exports.kilometersPerHourToKnots;
exports.kmh2mph = exports.kilometersPerHourToMilesPerHour;
exports.kn2kmh  = exports.knotsToKilometersPerHour;
exports.kn2mph  = exports.knotsToMilesPerHour;
exports.mph2kmh = exports.milesPerHourToKilometersPerHour;
exports.mph2kn  = exports.milesPerHourToKnots;
