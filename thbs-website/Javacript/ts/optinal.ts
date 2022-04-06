interface IPerson {
    name: string;
    age: number;
  }
  
  function greet(person: IPerson) {
    return "Hello " + person.name;
  }
  
  
  let msg = greet({name: 'sss', age: 20});
  
  console.log(msg)