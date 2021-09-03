"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.calArea = function () {
        this.area = (this.base * this.height) / 2;
        return this.area;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
