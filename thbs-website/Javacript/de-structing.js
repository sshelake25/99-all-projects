// //ES5 --> from aray you get value inside varible 
// var list = [1, 2, 3]; // array 10 element;

// var a = list[0], b = list[2];

// //  let name = 'thbas';
// //  let hello = 'goodby';
// //  let name = 'thbs', hello = 'goodby';
// //  let name, hello;

// // var tmp = a; 
// // a = b; 
// // b = tmp;

// /**
//  * destructring of values into varibles
//  */

// //array 
// let namesList = [45, 78, 'three', 23]; //
// // array de-structing
// let [first, , , name] = namesList;

// console.log(first, name);


/**
 * Object destructing
 */
//es5 / old way
let getPersonInfo = () => {
    return {
        op: 'plus',
        lhs: 'left-side',
        rhs: 'right-side'
    }
}

var tmp = getPersonInfo();
// console.log(tmp);
// var op = tmp.op;
// var lhs = tmp.lhs;
// var rhs = tmp.rhs;

//short ES 6 -- object de-struct 
//[] {}
let { op, lhs, rhs } = getPersonInfo(); //object 
console.log(op, lhs, rhs);


let cmpy = {
    name_ss: 'thbs',
    noOfEmp: 100,
    foundation: 'March 2020',
};
//renameing ---> proname: renamedName
let { name_ss, noOfEmp, foundation: renamedFoundation} = cmpy;

console.log(name_ss, noOfEmp, foundation);

//We will continue, please start performing labs aroud 
// diffrent features we have covers 

// Lab Taks 
// -----
// 1 null vs undefined
// 2. rest and spead obs 
// 3. defaul value to function 
// 4. array and object destring 
// 5. create promise object --
       // that value should resolve as 
       //---> "finnaly learned promised in js"

// // if you finish above list, please continue on 
// //JD page assement 

