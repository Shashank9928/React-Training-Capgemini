var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World Good Morning...!");
function sum(num1, num2) {
    return (num1 + num2);
}
function add(num1, num2) {
    return (num1 + num2);
}
var n1 = +10;
var n2 = +"20";
var result = sum(n1, n2);
var result1 = add(n1, n2);
console.log(result);
console.log(result1);
var add1;
var pi = 3.14;
var s = "Hello";
add1 = 0;
console.log(s.toUpperCase());
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var list3 = [1, 2, 3, 4, 5];
console.log(list1);
console.log(list2);
console.log(list3);
// Random Variable
var randomvalue = 10;
console.log(randomvalue);
randomvalue = "Hello";
console.log(randomvalue);
randomvalue = true;
console.log(randomvalue);
// Unknownn type Variable
var myvar;
myvar = 10;
myvar = "Hello";
console.log(myvar.toUpperCase());
myvar = true;
var a;
a = 10;
a = "Hello";
// Mixed Value variable
var mixedValued;
mixedValued = 10;
mixedValued = "Hello";
mixedValued = true;
console.log("mixed Value: ", mixedValued);
// optional values function
function optionalSum(num1, num2) {
    if (num2) {
        return (num1 + num2);
    }
    else {
        return num1;
    }
}
console.log("Optional Sum: ", optionalSum(10));
function fullName(firstName, lastName, age) {
    console.log(firstName + " " + lastName + " " + age);
}
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName + " " + person.age);
}
fullName("John", "Doe", 30);
fullName1({ firstName: "John", lastName: "Doe", age: 30, email: "email@gmail.com" });
// Class and Object and inheritance
var Employee = /** @class */ (function () {
    function Employee(empName) {
        this.empName = empName;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.empName);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.deligeteTask = function () {
        console.log("Manager is delegating task");
    };
    return Manager;
}(Employee));
var emp1 = new Manager("John");
emp1.greet();
emp1.deligeteTask();
console.log(emp1.empName);
