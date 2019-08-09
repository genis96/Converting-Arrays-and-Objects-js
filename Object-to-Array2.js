/* Write a function called "listAllValues" which returns an array of all the input object's values. Example input:

var input = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};
Function's return value (output):

['Krysten', 33, false]
Do not use "Object.values" to solve this prompt.

Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:

var alternativeInput = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};
Function's return value (output):

['a', 11, true, 1]
*/
/* Pseudo 
1. create new var with empty array
2. for..in loop
3. push the obj[key] into value
4. return it
*/
function listAllValues(obj) {
    // your code here
    let value = [];
    for(var key in obj) {
        value.push(obj[key]);
    }
    return value;
  }
  let input = {
    name : 'Krysten',
    age : 33,
    hasPets : false
  };

console.log(listAllValues(input));


//Another Way using hasOwnProperty(): Determines whether an object has a property with the specified name.
function listAllValues(obj) {
    let value = [];
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            value.push(obj[key]);
        }
    }
    return value;
}

let input = {
    name: 'Genis',
    age: 22,
    hasPets: true
};

console.log(listAllValues(input));