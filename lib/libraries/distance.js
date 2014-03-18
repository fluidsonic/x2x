'use strict';

var METERS__PER__FOOT      = 0.3048;
var METERS__PER__KILOMETER = 1000;
var METERS__PER__MILE      = 1609.344;
var FEET__PER__MILE        = 5280;
var FEET__PER__METER       = 1 / METERS__PER__FOOT;
var FEET__PER__KILOMETER   = FEET__PER__METER * METERS__PER__KILOMETER;
var KILOMETERS__PER__FOOT  = 1 / FEET__PER__KILOMETER;
var KILOMETERS__PER__METER = 1 / METERS__PER__KILOMETER;
var KILOMETERS__PER__MILE  = METERS__PER__MILE / METERS__PER__KILOMETER;
var MILES__PER__KILOMETER  = 1 / KILOMETERS__PER__MILE;
var MILES__PER__METER      = 1 / METERS__PER__MILE;
var MILES__PER__FOOT       = 1 / FEET__PER__MILE;


module.exports = exports = {

	feetToKilometers:   function(feet)       { return feet * KILOMETERS__PER__FOOT; },
	feetToMeters:       function(feet)       { return feet * METERS__PER__FOOT; },
	feetToMiles:        function(feet)       { return feet * MILES__PER__FOOT; },
	kilometersToFeet:   function(kilometers) { return kilometers * FEET__PER__KILOMETER; },
	kilometersToMeters: function(kilometers) { return kilometers * METERS__PER__KILOMETER; },
	kilometersToMiles:  function(kilometers) { return kilometers * MILES__PER__KILOMETER; },
	metersToFeet:       function(meters)     { return meters * FEET__PER__METER; },
	metersToKilometers: function(meters)     { return meters * KILOMETERS__PER__METER; },
	metersToMiles:      function(meters)     { return meters * MILES__PER__METER; },
	milesToFeet:        function(miles)      { return miles * FEET__PER__MILE; },
	milesToKilometers:  function(miles)      { return miles * KILOMETERS__PER__MILE; },
	milesToMeters:      function(miles)      { return miles * METERS__PER__MILE; },

};

exports.ft2km = exports.feetToKilometers;
exports.ft2m  = exports.feetToMeters;
exports.ft2mi = exports.feetToMiles;
exports.km2ft = exports.kilometersToFeet;
exports.km2m  = exports.kilometersToMeters;
exports.km2mi = exports.kilometersToMiles;
exports.m2ft  = exports.metersToFeet;
exports.m2km  = exports.metersToKilometers;
exports.m2mi  = exports.metersToMiles;
exports.mi2ft = exports.milesToFeet;
exports.mi2km = exports.milesToKilometers;
exports.mi2m  = exports.milesToMeters;
