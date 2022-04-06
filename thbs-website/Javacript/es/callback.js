function addNumber(fnArg) {
    console.log('I am inside add Number');
    let myMess =  fnArg();
    console.log(myMess);
    return 10 + 5;
}

function sayHello() {
    return 'Hello';
}

addNumber( sayHello );