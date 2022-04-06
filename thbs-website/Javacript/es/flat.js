
 import * as math from 'http://127.0.0.1:5500/Javacript/es/math';
// import { sum, pi } from "./math";

let obj = {
    name: "thbs",
    sayLater: function () {
        console.log(this)
        console.log(`${this.name}`);
    }
};

obj.sayLater();

let two_sum = math(12, 50);
console.log(two_sum);
