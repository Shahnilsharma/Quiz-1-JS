// - **Easy**: Write a function to check if a given object is empty.
function checkEmptyObject(_obj) {
    if (Object.entries(_obj).length === 0) {
        console.log('object is empty');
    } else {
        console.log('object is not empty');
    }
}

let notempty = {name:'Arham'};
let empty = {};
checkEmptyObject(empty);
  

// - **Easy**: Create an object with property `name`, `age`, and `occupation`, and write a function to print each property and its value.

let User={
    name:'shahnil',
    age:22,
    occupation:'student'
}
function printProperties(_obj){
    console.log(Object.entries(_obj));
}
printProperties(User);

// - **Easy**: Write a function to clone an object.
 
function cloneObject(_obj) {
    let clonedObj =Object.assign({}, _obj);
    console.log(`cloned object:`, clonedObj);
}
let toClone={
    isAdult:true,
    age:22
}
cloneObject(toClone);

// - **Easy**: Write a function to merge two objects.
function merge2Objects(_obj1, _obj2) {
    let mergedObj =Object.assign({},_obj1,_obj2);
    console.log(`2 Merged object:`, mergedObj);
}
let obj1 = { name: "Arham" };
let obj2 = { age: 22 };
merge2Objects(obj1, obj2);

// - **Medium**: Write a function that takes an object and returns an array of its keys.
function keysOfObject(_obj) {
    console.log(`Keys of object:`,Object.keys(_obj));
}
keysOfObject({name:'shahnil',isAdult:true});

// - **Medium**: Write a function that takes an object and returns an array of its values.
function arrayOfObject(_obj) {
    console.log(`array values: `,Object.values(_obj));
}
arrayOfObject({name:'shahnil',isAdult:true});
// - **Medium**: Write a function that takes an object and returns an array of key-value pairs.
function keyValuePairs(_obj) {
    console.log(`Key value pairs: `,Object.entries(_obj));
}
keyValuePairs({name:'shahnil',isAdult:true});
// - **Medium**: Write a function to deeply merge two nested objects.
function deepMergeObjects(obj1, obj2) {
    let merged = { ...obj1, ...obj2 };
    console.log(`deeply merged`,merged);
}
let merging1 = { 
    name: "Arham", address: { city: "Karachi" } 
};
let merging2 = { 
    name: "Wasim", address: { city: "Lahore" } 
};
deepMergeObjects(merging1,merging2)

// - **Medium**: Write a function to update the properties of an object using another object.
function updateObjectProperties(obj, update) {
    let updated= { ...obj, ...update };
    console.log(`updated`,updated);
}
let objjj = { name: "Arham", age: 22 };
let update = { age: 23 };
console.log(updateObjectProperties(objjj, update));

// - **Medium**: Write a function that takes an array of objects and returns an object where the keys are the values of a specified property from each object, and the values are arrays of the remaining properties.