/* Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

Argument:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

function convertObjectToArray(obj) {
    // your code here
    let thisArray = [];
    for(let key in obj) {
        let thisArr = [key, obj[key]];
        thisArray.push(thisArr);
    }
    return thisArray;
  }

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
  };

  console.log(convertObjectToArray(input));



// function convertObjectToArray(obj) {
//     // your code here
//     let thisArray = [];
//     for(let i = 0; i < obj.length; i++) {
//         let thisArr = [];
//         for(let j = 0; j < obj[i].length; j++) {
//             thisArr(obj[i][j][0] = obj[i][j][1]);
//         }
//         thisArray.push(thisArr);
//     }
//     return thisArray;
//   }

// var input = {
//     name: 'Holly',
//     age: 35,
//     role: 'producer'
//   };

//   console.log(convertObjectToArray(input));

