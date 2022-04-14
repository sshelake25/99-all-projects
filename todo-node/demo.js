
console.log(`taking command line arg for node js progam`);
process.argv.forEach((ele, index, arr) => {
    console.log(`${ele} --> ${index}`);
})

const args = process.argv.slice(2); //

console.log(args)

