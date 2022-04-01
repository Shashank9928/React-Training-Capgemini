console.log("Hello World Good Morning...!")


function sum(num1, num2) {
    return (num1 + num2);
}

function add(num1: number, num2: number): number {
    return (num1 + num2);
}

let n1 = +10;
let n2 = +"20";

let result = sum(n1, n2);

let result1 = add(n1, n2);

console.log(result);
console.log(result1);

let add1;
const pi = 3.14;
let s = "Hello";

add1 = 0;

console.log(s.toUpperCase());

let list1 = [1, 2, 3, 4, 5];

let list2: number[] = [1, 2, 3, 4, 5];

let list3: Array<number> = [1, 2, 3, 4, 5];

console.log(list1);
console.log(list2);
console.log(list3);


// Random Variable
let randomvalue: any = 10;
console.log(randomvalue);

randomvalue = "Hello";

console.log(randomvalue);

randomvalue = true;

console.log(randomvalue);

// Unknownn type Variable
let myvar: unknown;

myvar = 10;

myvar = "Hello";

console.log((myvar as string).toUpperCase());


myvar = true;




let a;

a = 10;

a = "Hello";

// Mixed Value variable

let mixedValued: number | string | boolean;

mixedValued = 10;

mixedValued = "Hello";

mixedValued = true;



console.log("mixed Value: ", mixedValued);


// optional values function
function optionalSum(num1: number, num2?: number) {
    if (num2) {
        return (num1 + num2);
    }
    else {
        return num1;
    }
}
console.log("Optional Sum: ", optionalSum(10));

// InterFace

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email: string;
}

function fullName(firstName: string, lastName: string, age: number) {
    console.log(firstName + " " + lastName + " " + age);
}

function fullName1(person: Person) {
    console.log(person.firstName + " " + person.lastName + " " + person.age);
}

fullName("John", "Doe", 30);

fullName1({firstName: "John", lastName: "Doe", age: 30,email:"email@gmail.com"});


// Class and Object and inheritance

class Employee {
    public empName: string;

    constructor(empName: string) {
        this.empName = empName;
    }

    greet() {
        console.log("Hello " + this.empName);
    }
}


class Manager extends Employee{
    
    constructor(managerName: string) {
        super(managerName);
    }

    deligeteTask() {
        console.log("Manager is delegating task");
    }
}


let emp1 = new Manager("John");

emp1.greet();

emp1.deligeteTask();

console.log(emp1.empName);