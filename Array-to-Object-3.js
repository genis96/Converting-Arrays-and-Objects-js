/* Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look like this:

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
Given that input, the return value should look like this:

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
Note that the input may have a different number of rows or different keys than the given sample.

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.
*/
/* Pseudo
So... return an object inside the array. Organized.
1. create array variable 
2. iterate (array)
3. iteratare array
4. create var object
5. iteratare again, 
6. make object = to the vars 
7. push obj in arr -> thisArray.push(thisObject);
8. return thisArray
*/

//0: {firstName: "Joe", lastName: "Blow", age: 42, role: "clerk"}
//1: {firstName: "Mary", lastName: "Jenkins", age: 36, role: "manager"}

function transformEmployeeData(employeeData) {
    let thisArray = [];
    for(let i = 0; i < employeeData.length; i++) {
        let thisObject = {};
        for(let j = 0; j < employeeData[i].length; j++) {
            thisObject[employeeData[i][j][0]] = employeeData[i][j][1];
        }
        thisArray.push(thisObject);
    }
    return thisArray;
}

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(input));

//Another Way
//for ... of loop, for in will not work here
function transformEmployeeData(employeeData) {
    // your code here
    let thisArray = [];
    for(var i of employeeData) {
        let thisObject = {};
        for(var j of i) {
            thisObject[j[0]] = j[1];
        }
        thisArray.push(thisObject);
    }
    return thisArray;
}

  var employeeDatabase = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(employeeDatabase));
