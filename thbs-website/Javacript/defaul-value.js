//es 5 
function calNumbers(n1, n2, n3, n4) {

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);

    if (n3 == undefined) {
        n3 = 10;
    }

    if (n4 == undefined) {
        n4 = 4;
    }

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);
    return n1 + n2 + n3 + n4;
}

calNumbers(1, 2);// 2 param values passed

/**
 * ES 6 Feature we can assing default to function param
 */

function calNumbersES6(n1, n2, n3 = 10, n4 = 4) {

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);

    // if(n3 == undefined) {
    //     n3 = 10;
    // }

    // if(n4 == undefined) {
    //     n4 = 4;
    // }

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);
    return n1 + n2 + n3 + n4;
}

calNumbersES6(1, 2, 3, 5);// 2 param values passed
