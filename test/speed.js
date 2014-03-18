'use strict';

var compare = require('./helpers/compare');
var speed = require('../lib').speed;


describe('Speed Units', function() {

	it('#kilometersPerHourToKnots()', function() {
		compare(speed.kilometersPerHourToKnots(1), 0.5399568034, 0.0000000001);
		compare(speed.kmh2kn(1),                   0.5399568034, 0.0000000001);
	});

	it('#kilometersPerHourToMilesPerHour()', function() {
		compare(speed.kilometersPerHourToMilesPerHour(1), 0.621371192237334, 0.0000000001);
		compare(speed.kmh2mph(1),                         0.621371192237334, 0.0000000001);
	});

	it('#knotsToKilometersPerHour()', function() {
		compare(speed.knotsToKilometersPerHour(1), 1.852);
		compare(speed.kn2kmh(1),                   1.852);
	});

	it('#knotsToMilesPerHour()', function() {
		compare(speed.knotsToMilesPerHour(1), 1.1507794480, 0.0000000001);
		compare(speed.kn2mph(1),              1.1507794480, 0.0000000001);
	});

	it('#milesPerHourToKilometersPerHour()', function() {
		compare(speed.milesPerHourToKilometersPerHour(1), 1.609344);
		compare(speed.mph2kmh(1),                         1.609344);
	});

	it('#milesPerHourToKnots()', function() {
		compare(speed.milesPerHourToKnots(1), 0.8689762419, 0.000000001);
		compare(speed.mph2kn(1),              0.8689762419, 0.000000001);
	});
});
