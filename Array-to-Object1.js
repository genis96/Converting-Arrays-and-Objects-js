/* Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

Example input:

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
Function's return value (output):

{
  Queen : 'Beyonce'
}
Do not change the input array. Assume all elements in the input array will be of type 'string'.

Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

E.g. it should handle input like:

['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
Function's return value (output):

{
  Kevin : 'Coleman'
}
*/

function transformFirstAndLast(array) {
    let thisObject = {};
    let key = array[0];
    let assignLast = array[array.length-1]; //assignLast now holds last array position
    thisObject[key] = assignLast; //assigned Key of Queen and assignLast = Beyonce
    return thisObject;
}

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
var newName = transformFirstAndLast(input);
console.log(newName);



