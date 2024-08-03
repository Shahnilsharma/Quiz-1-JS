// - **Easy**: Write a function to find the maximum element in an array.

function findMax(_arr){
    let maxElement = _arr[0];
    for(let i=0;i<=_arr.length;i++){
         if(_arr[i]>maxElement){
            maxElement=_arr[i];
         }
    }
    console.log(`The Maximum element in this array is ${maxElement}`);
}
findMax([10,90,80,70,101,54]);

// - **Easy**: Write a function to reverse an array without using the built-in `reverse` method.


function reverseArray(_arr){
    let reversedArr=[];
    for(let i=_arr.length-1;i>=0;i--){
        reversedArr.push(_arr[i]);
    }
    console.log(`reversed array : ${reversedArr} `);
}

reverseArray([1,2,3,4,5,6,7,8,9]);

// - **Easy**: Use the `map` method to create a new array that contains the square of each element in the original array.

function squareMap(_arr){
    let squaredMap= _arr.map((element)=>{
        return element*element;
    });
    console.log(`Squared Mapping : ${squaredMap}`);
}
squareMap([2,4,6,8,10]);

// - **Easy**: Write a function that uses the `filter` method to remove all even numbers from an array.

function removeEvenNumbers(_arr) {
    let oddNumbers = _arr.filter((element) => {
        return element % 2 !== 0;
    });
    console.log(`Array with even numbers removed: ${oddNumbers}`);
}

removeEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// - **Easy**: Use the `reduce` method to calculate the sum of all elements in an array.

// - **Medium**: Write a function that uses `map` to extract the names of all users from an array of user objects (each user object contains `name` and `age` properties).
function extractNames(_map) {
    let names = _map.map((_map) => {
        return _map.name;
    });
    console.log(`Names of all users: ${names}`);
}
let profile=[
    { name: "Rahim", age: 15 },
    { name: "Saleem", age: 12 },
    { name: "Karim", age: 10 }
]
extractNames(profile);

// - **Medium**: Write a function that uses `filter` to get all the users older than 30 from an array of user objects.
function getUsers(_users) {
    let olderUsers = _users.filter((_user) => {
        return _user.age > 30;
    });
    console.log("Users older than 30:",olderUsers);
    
}

let users = [
    { name: "Rahim", age: 22 },
    { name: "Saleem", age: 30 },
    { name: "Kareem", age: 43 },
    { name: "Abdul", age: 54 }
];

getUsers(users);

// - **Medium**: Use `reduce` to create an object that contains the counts of each unique element in an array.

// - **Medium**: Write a function to flatten a nested array using the `reduce` method.

// - **Medium**: Use `filter` and `map` together to get an array of names of users older than 30 from an array of user objects.

let olderUsersNames = users.filter(user => user.age > 30).map(user => user.name);
console.log("Names of users older than 30:", olderUsersNames);