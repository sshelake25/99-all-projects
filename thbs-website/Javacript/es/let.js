function hello() {
    var a = "i am a"; // global avilable

    for (var i = 0; i < 5; i++) {
        var b = "block"; // if we  declar b with let keywork will not be accessible outside of loop
    }

    console.log(b);
}

hello();

const CMPYNMAE = 'THIS';
// CMPYNMAE = 'THBS';

function funcaa() {
    if (true) {
        const tmp = 123;
        console.log(tmp);// Uncaught ReferenceError: tmp is not defined} 
    }
}

funcaa();


const myObj = {};
// Object.freeze(myObj); //fix
// myObj = {};

myObj['fname'] = 'Chetan';
console.log(myObj);

let message = 'MOVIES';
//ES5 / old
let single = message + 'hello\n' + 'world\n' + 'my\n' + 'name\n' + 'is\n' + 'surekha\n';

console.log(single)
// ES6 ways of string concat 
let myMessage = `${message}
hello
world
i
am 
on
newline
${message}
without adding`;

console.log(myMessage);