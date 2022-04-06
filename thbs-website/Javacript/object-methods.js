const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
};

const colors = Object.values(icecreamColors);
console.log('------objects values-----');
console.log(colors);


const keys = Object.keys(icecreamColors);
console.log('------objects kesy-----');
console.log(keys);

const frozenObject = {
    name: 'Robert'
}

Object.freeze(frozenObject);


frozenObject.name = 'Henry';
frozenObject['age'] = '2020';


console.log(frozenObject);

const firstObject = {
    firstName: 'Robert',
    age: 12
}

const secondObject = {
    firstName: 'Cooper'
}

const combinedObject = Object.assign(firstObject, secondObject);


console.log(combinedObject);




Array.isArray()
Object.keys()
         .values()
         .assign()
         .entries()
         .freeze()
         .seal()


