"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calArea = function () {
        this.area = 3.14 * (this.radius * 2);
        return this.area;
    };
    return Circle;
}());
exports.Circle = Circle;
