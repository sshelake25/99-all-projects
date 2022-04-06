function getAddress(param, msg) {
    let rs =  50 + 50;
    return rs;
}

let result = getAddress(100, 'Good Afternoon');
console.log(result); // !!! Good Afternoone !!! 130
//------------------------------------------

// flat arrow fuctions 

function addNumber(n1, n2) {
    return n1 + n2;
}

console.log(addNumber(10, 20));
//------------------------------
let myadd = (n1, n2) => n1 + n2;
console.log(myadd(10, 20));// 15