
var person=['the dog','my granma','his turtle','my bird'];
var verb=['eat','pissed','crushed','broked'];
var when=['before the class','right in time','when I finished','during my lunch','while I was praying'];
var thing=['my homework' , 'the keys' , 'the car'];

const randint =(top)=>{
   const index = Math.floor(Math.random()*top)
   if (index === top) return top-1
   return index
}

console.log ((person [randint(person.length)]),(verb [randint(verb.length)]),(thing [randint(thing.length)]),(when[randint(when.length)]));
