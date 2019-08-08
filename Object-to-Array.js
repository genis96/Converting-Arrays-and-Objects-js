/* Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

var input = {
  name : 'Sam',
  age : 25,
  hasPets : true
};
Function's return value (output) :

['name', 'age', 'hasPets']
Do not use "Object.keys" to solve this prompt.

Note that your function should be able to handle any object passed in it.

E.g. it should also handle an input like:

var alternativeInput = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};
Function's return value (output):

['a', 'number', 'hungry', 'grammyWins']
*/
/* Pseudo 
1. create array var
2. iterate for in loop
3. push the obj content inside thisArray
4. return the array 
*/

function getAllKeys(obj) {
    // your code here
    let thisArray = [];
    for(var i in obj) {
        thisArray.push(i);
    }
    return thisArray;
  }

let input = {
    name : 'Sam',
    age : 25,
    hasPets : true
};
console.log(getAllKeys(input));



