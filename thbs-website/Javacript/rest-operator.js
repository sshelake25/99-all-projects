// /**
//  * 
//  * @param {*} x  - total sell
//  * @param {*} y  - loss
//  * @param  {...any} a   - config value
//  * @returns 
//  */
// //... it single veriable aggiator
// function thbs(a, b, c, ...config) {
//     console.log(config);
//     console.log(config.length);

// }

// thbs(1, 2, "hello", true, 7, 'mean', '99') 

/**
 * Speard Operator 
 * ...extsingIterablevarivle
 * 
 */

let listName = ['Priya', 'Aman', 'Chetali'];
console.log(listName); //
let listTop = ['Munit', ...listName];
console.log(listTop); // 

var str = "foo hello";
console.log(str);

// conver string into array 
var chars = [...str];
console.log(chars);
console.log(chars.length);

