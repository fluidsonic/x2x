x2x
===

[![Build Status](https://travis-ci.org/fluidsonic/x2x.png?branch=master)](https://travis-ci.org/fluidsonic/x2x)
[![Coverage Status](https://coveralls.io/repos/fluidsonic/x2x/badge.png)](https://coveralls.io/r/fluidsonic/x2x)
[![Dependency Status](https://gemnasium.com/fluidsonic/x2x.png)](https://gemnasium.com/fluidsonic/x2x)
[![Code Climate](https://codeclimate.com/github/fluidsonic/x2x.png)](https://codeclimate.com/github/fluidsonic/x2x)

Simple and performant unit converter for node.js.



Quickstart
----------

You can either use the short form (e.g. `x2x.distance.ft2mi(…)`) or a more expressive form (e.g. `x2x.distance.feetToMiles(…)`).

```javascript
// Angle Units: degrees(deg), radians(rad)
var angle = require('x2x').angle;

var radians = angle.deg2rad(180);      // or degreesToRadians()
var degrees = angle.rad2deg(Math.PI);  // or radiansToDegrees()


// Distance Units: feet(ft), kilometers(km), meters(m), miles(mi)
var distance = require('x2x').distance;

var feet       = distance.m2ft(100);  // or metersToFeet()
var kilometers = distance.mi2km(10);  // or milesToKilometers()
var meters     = distance.ft2m(50);   // or feetToMeters()
var miles      = distance.km2mi(5);   // or kilometersToMiles()
// etc.


// Speed Units: kilometersPerHour(kmh), knots(kn), milesPerHour(mph)
var speed = require('x2x').speed;

var kilometersPerHour = speed.mph2kmh(60);  // or milesPerHourToKilometersPerHour()
var knots             = speed.kmh2kn(100);  // or kilometersPerHourToKnots()
var milesPerHour      = speed.kn2mph(10);   // or knotsToMilesPerHour()


// Temperature Units: celsius(c), fahrenheit(f)
var temperature = require('x2x').temperature;

var celsius    = temperature.f2c(24);  // or fahrenheitToCelsius()
var fahrenheit = temperature.c2f(10);  // or celsiusToFahrenheit()
```


Units
-----

It's always the same approach:
- `x2x.<unit type>.<unit 1>To<unit 2>(…)` (= long format, e.g. `x2x.distance.feetToMiles(…)`) or
- `x2x.<unit type>.<unit symbol 1>2<unit symbol 2>(…)` (= short format, e.g. `x2x.distance.ft2mi(…)`).

Unit 1 and Unit 2 must be different.

### Angle

- degrees (deg)
- radians (rad)

### Distance

- feet (ft)
- kilometers (km)
- meters (m)
- miles (mi)

### Speed

- kilometersPerHour (kmh)
- knots (kn)
- milesPerHour (mph)

### Temperature

- celsius (c)
- fahrenheit (f)



Installation
------------

	$ npm install x2x



Testing
-------

	$ npm install
	$ npm test



Contribute!
-----------

Support this project by providing more units.

Please check this list before sending a pull request:
- Be as close to unit standards as possible (unit names, short names/symbols, etc.).
- Add tests for your units which cover both the long and the short forms.
- Syntax must be consistent with what already exists.
- `jshint` obeys `.jshintrc` and reports no warnings.
- Coverage remains 100%.



License
-------

MIT
