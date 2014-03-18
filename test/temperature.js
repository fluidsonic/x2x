'use strict';

var compare = require('./helpers/compare');
var temperature = require('../lib').temperature;


describe('Temperature Units', function() {

	it('#celsiusToFahrenheit()', function() {
		compare(temperature.celsiusToFahrenheit(1), 33.8);
		compare(temperature.c2f(1),                 33.8);
	});

	it('#fahrenheitToCelsius()', function() {
		compare(temperature.fahrenheitToCelsius(1), -17.2222222222, 0.0000000001);
		compare(temperature.f2c(1),                 -17.2222222222, 0.0000000001);
	});
});
