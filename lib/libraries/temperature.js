'use strict';

module.exports = exports = {

	celsiusToFahrenheit:  function(celsius)    { return (1.8 * celsius) + 32; },
	fahrenheitToCelsius:  function(fahrenheit) { return (5 / 9) * (fahrenheit - 32); },

};

exports.c2f = exports.celsiusToFahrenheit;
exports.f2c = exports.fahrenheitToCelsius;
