var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(className) {
        this.className = className;
        this.area = 0.0;
    }
    Shape.prototype.display = function () {
        console.log("Area of " + this.className + ": " + this.area);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(className, radius) {
        var _this = _super.call(this, className) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calArea = function () {
        this.area = 3.14 * (this.radius * 2);
        return this.area;
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(className, base, height) {
        var _this = _super.call(this, className) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.calArea = function () {
        this.area = (this.base * this.height) / 2;
        return this.area;
    };
    return Triangle;
}(Shape));
var circle = new Circle('Circle', 13);
var triangle = new Triangle('Triangle', 10, 32);
circle.calArea();
circle.display();
triangle.calArea();
triangle.display();
/**
 * Method overridding concepts in inheritance
 */
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.name = name;
    }
    Subject.prototype.display = function () {
        console.log('Subject Name: ' + this.name);
    };
    return Subject;
}());
var English = /** @class */ (function (_super) {
    __extends(English, _super);
    function English(creditHours) {
        var _this = _super.call(this, 'English') || this;
        _this.creditHours = creditHours;
        return _this;
    }
    English.prototype.display = function () {
        /**
         * here we also call the display function from the super class but
         * for explaining and understanding the concept of overriding we will use own
         * implementation of sub class
         */
        console.log("Subject name: " + this.name + "\nCreditHours: " + this.creditHours);
    };
    return English;
}(Subject));
var english = new English(4);
english.display(); //this will call the display function implemented in the sub class
