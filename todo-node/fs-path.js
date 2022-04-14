
// console.log(`taking command line arg for node js progam`);
// process.argv.forEach((ele, index, arr) => {
//     console.log(`${ele} --> ${index}`);
// })
// const args = process.argv.slice(2); //
// console.log(args)
//-----------------------------------
//File paths 
const mypath = require('path');
const fs = require('fs');
const notes = '/users/joe/notes.html'; // Linux
const winPath = "C:\Users\DELL\text.js" // Window
console.log(mypath.dirname(notes)) // /users/joe
console.log(mypath.basename(notes)) // notes.txt
console.log(mypath.extname(notes)) // .txt
/**
 * Reading file using fs module
 */
console.warn(`I am reading file by readFile method `);
// Add correct and wrong path of file and validate it.
fs.readFile("./.env", 'utf8', (err, data) => {
    if (err) {
        console.error(`I am in error stats ${err}`)
        return
    }
    console.warn(data);
})


/**
 * Wriing conent inside  file using fs module
 */

 const content = '---Appended conents!'
//  { flag: 'a+' } --> append connent if file already exsting
 fs.writeFile('./test.txt', content, { flag: 'a+' }, err => {
   if (err) {
     console.error(err)
     return
   }
   console.log('Added content inside file succcefully')
   //file written successfully
 })
 