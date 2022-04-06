class Person { //(1)
    // private firstName = ""; //(2)
    // private lastName = "";

    // constructor(fname, lname) {
    //     this.firstName = fname;
    //     this.lastName = lname;
    // }

    constructor(private firstName, private lastName) {
    }

    getName() {
        console.log(this.firstName + "    " + this.lastName);
    }
}

let p1 = new Person('ss', 'cc');

p1.getName();