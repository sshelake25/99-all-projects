
// to create object from class
// object == instance 
// let myObj = new className 

let myThbs = new Promise((resolve, reject) => {
    console.log('i am first line in promise')//1
    setTimeout(() => {
        console.log('i am first line in settimeout') //2
        reject('THBS'); //3
    }, 10000);
    console.log('i am last line in promise') //4
});

myThbs
    .then(
        (success) => {
            console.log(`I am in success callback of promise ${success}`);
           return new Promise((s, e) => { return s('HURRRR'); }); // api
        },
        (error) => {
            console.log(`I am in error callback of promise ${error}`);
        }
    )
    .then(
        (sval) => { console.log(`11111 i am in then success chain ${sval}`) },
        (errorVal) => { console.log(`1111 i am in then error chain ${errorVal}`) }
    )
    .then(
        (sval) => { console.log(`22222i am in then success chain ${sval}`) },
        (errorVal) => { console.log(` 2222i am in then error chain ${errorVal}`) }
    )
    .catch(
        (onReject) => {
            console.log(`I am inside reject and catch block`)
        }
    )