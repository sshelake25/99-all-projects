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
var Person1 = /** @class */ (function () {
    function Person1(firstName, lastName) {
        this.firstName = ""; //(2)
        this.lastName = "";
        console.log('i am in constructor');
        console.log(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.name = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person1.prototype.whoAreYou = function () {
        return "Hi i'm ".concat(this.name()); //(5)
    };
    return Person1;
}());
//Inheritance 
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(firstName, lastName, course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.course = course;
        return _this;
    }
    //overriding method of parent
    Student2.prototype.whoAreYou = function () {
        return "".concat(_super.prototype.whoAreYou.call(this), " and i'm studying ").concat(this.course); //(5)
    };
    Student2.prototype.getCourseDetails = function () {
        return "".concat(this.course, " is from child class");
    };
    return Student2;
}(Person1));
var chetan = new Student1('chetan', 'bhagat', 'MEAN');
console.log(chetan.whoAreYou());
// let ram = new Person('Ram', 'Shah');
// let wruMsg = ram.whoAreYou();
// console.log(wruMsg);
// // object or instance of class person
// let amit = new Person('amit', 'shah');
// let nm = amit.name();
// console.log(nm);
// // ram shah
// // amit shah 
