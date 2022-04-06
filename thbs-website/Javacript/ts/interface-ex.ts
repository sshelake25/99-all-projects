
interface IPerson {
    fname: string;
    lname: string;
    getFullname? : Function; //optinal prop
    list: Array<String>;
}

//enforce rule on this call correct type of data should in prop or functe cec.
class Person implements IPerson {
    fname = 'Munit';
    lname = 'Yadav';
    list = ['Munit', 'Amit'];

    constructor() { }

    isPresent(count) {
    } 
}