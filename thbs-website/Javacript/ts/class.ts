class Person1 { //(1)
    firstName = ""; //(2)
    lastName = "";

    constructor(firstName, lastName) {
        console.log('i am in constructor')
        console.log(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou () {
        return `Hi i'm ${this.name()}`; //(5)
    }
}

//Inheritance 
class Student2 extends Person1 { //(1)
    course; //(2)
    constructor(firstName, lastName, course) {
        super(firstName, lastName); //(3)
        this.course = course;
    }

    //overriding method of parent
    whoAreYou() {   //(4)
        return `${super.whoAreYou()} and i'm studying ${this.course}`; //(5)
    }

    getCourseDetails() {
         return `${this.course} is from child class`; 
    }
}

let chetan = new Student1('chetan', 'bhagat', 'MEAN');
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

