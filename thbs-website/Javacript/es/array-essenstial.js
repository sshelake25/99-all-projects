let msg = ['hello', 'how', 'are', 'you'];
//welcome
msg.push('welcome');
console.log(`added welcome to --> ${msg}`);
// good byee

msg.push('good', 'byee');
console.log(`added good byee to --> ${msg}`);

//---------------------------------------------------------
msg.pop();
console.log(`removed last elemnt --> ${msg}`);

// excellent -- start of array 
msg.unshift('excellent');
console.log(`added  excellent  start of  --> ${msg}`);
// angular react
msg.unshift('angular', 'react');
console.log(`added  angular react start of  --> ${msg}`);

//remove from start of arrry
msg.shift(); 
console.log(`removed  angular  start of  --> ${msg}`);