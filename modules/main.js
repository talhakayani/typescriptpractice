"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
var triangle_1 = require("./triangle");
var circle = new circle_1.Circle(12);
var triangle = new triangle_1.Triangle(12, 2);
console.log(circle.calArea());
console.log(triangle.calArea());
