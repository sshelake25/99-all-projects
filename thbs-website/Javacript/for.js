// Way to declar array inside js
//  let myArr = [1, 4,5];
// Let myArr = new Array();

let myArr = ['hello', 'how', 'are', 'you'];
//trandiational for loop inside javascript
for (let i = 0; i < myArr.length; i++) {
    console.log(`for loop number ${i} array val at iteration "${myArr[i]}"`)
}

// forEach();
console.log('starting loop with forEach method');
myArr.forEach((ele, index, arr) => {
    console.log(`for loop number ${index} array val at iteration "${ele}"--> ${arr}`)
});

//filtere element base on condition 
let numberList = [20, 4, 15, 5, 2, 7];
let elemeless_5 = numberList.filter((val, indx, arr) => {
    // on what we want filter elemnts
    console.log(val, indx, arr)
    return val > 5;
});
// [20, 15, 7]
console.log(elemeless_5);
// filter array of object 
let personList = [
    { name: 'Priya', skill: ['java', 'javascript', 'css'] },
    { name: 'Chetan', skill: ['java', 'javascript', 'html'] },
    { name: 'Chetali', skill: ['javascript', 'html'] },
    { name: 'Raju', skill: ['javascript'] }
];

let filteredPerson = personList.filter((val, indx) => {
    // console.log(val)
    return val.name.startsWith('C');
    // return val.skill.includes('css'); // true or false 
});

console.log('======= Fillter Result ==========');
console.log(filteredPerson)

console.log(`Is Array method result ==> ${Array.isArray({})}`);


/**
 * Find going exit loop as soon as condition retuns true
 */
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element, index) => {
    console.log(element, index)
    return element > 10; //true
});
console.log(found);


/**
 * findIndex going retrun index of found element --> conditon satified 
 */

const my1 = [5, 12, 8, 130, 44];
const myFound1 = my1.findIndex((element, index) => {
    console.log(element, index)
    return element > 100; //true
});

console.log(` condition satified element index is --> ${myFound1}`);

/**
 * IndexOf()
 * if element found going return index of ele or 
 * if not found return -1 as result
 */

const my2 = [5, 12, 8, 130, 44];
console.log(my2.indexOf(2));


console.log(my2.join());

/**
 * MAP is used to transform array or modifed array the way you want
 * 
 */
let personMap = [
    { name: 'Priya', skill: ['java', 'javascript', 'css'] },
    { name: 'Chetan', skill: ['java', 'javascript', 'html'] },
    { name: 'Chetali', skill: ['javascript', 'html'] },
    { name: 'Raju', skill: ['javascript'] }
];


let mappedPerson = personMap.map((val, inx, arr) => {
    val.name = "Hello " + val.name; //modifed value 
    return val;
});
console.log(personMap);

console.log(mappedPerson);


