'use strict';

var compare = require('./helpers/compare');
var distance = require('../lib').distance;


describe('Distance Units', function() {

	it('#feetToKilometers()', function() {
		compare(distance.feetToKilometers(1), 0.0003048);
		compare(distance.ft2km(1),           0.0003048);
	});

	it('#feetToMeters()', function() {
		compare(distance.feetToMeters(1), 0.3048);
		compare(distance.ft2m(1),         0.3048);
	});

	it('#feetToMiles()', function() {
		compare(distance.feetToMiles(1), 0.0001893939, 0.0000000001);
		compare(distance.ft2mi(1),       0.0001893939, 0.0000000001);
	});

	it('#kilometersToFeet()', function() {
		compare(distance.kilometersToFeet(1), 3280.8398950131, 0.0000000001);
		compare(distance.km2ft(1),            3280.8398950131, 0.0000000001);
	});

	it('#kilometersToMeters()', function() {
		compare(distance.kilometersToMeters(1), 1000);
		compare(distance.km2m(1),               1000);
	});

	it('#kilometersToMiles()', function() {
		compare(distance.kilometersToMiles(1), 0.6213711922, 0.0000000001);
		compare(distance.km2mi(1),             0.6213711922, 0.0000000001);
	});

	it('#metersToFeet()', function() {
		compare(distance.metersToFeet(1), 3.2808398950, 0.0000000001);
		compare(distance.m2ft(1),         3.2808398950, 0.0000000001);
	});

	it('#metersToKilometers()', function() {
		compare(distance.metersToKilometers(1), 0.001);
		compare(distance.m2km(1),               0.001);
	});

	it('#metersToMiles()', function() {
		compare(distance.metersToMiles(1), 0.0006213711, 0.0000000001);
		compare(distance.m2mi(1),          0.0006213711, 0.0000000001);
	});

	it('#milesToFeet()', function() {
		compare(distance.milesToFeet(1), 5280);
		compare(distance.mi2ft(1),       5280);
	});

	it('#milesToKilometers()', function() {
		compare(distance.milesToKilometers(1), 1.609344);
		compare(distance.mi2km(1),             1.609344);
	});

	it('#milesToMeters()', function() {
		compare(distance.milesToMeters(1), 1609.344);
		compare(distance.mi2m(1),          1609.344);
	});
});
