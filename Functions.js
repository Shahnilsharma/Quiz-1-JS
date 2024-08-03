// - **Easy**: Write a function to check if a number is prime.
function checkPrime(num) {
    if (num <= 1) {
        console.log(`${num} is not a prime number.`);
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not a prime number.`);
            return false;
        }
    }
    console.log(`${num} is a prime number.`);
    return true;
}

checkPrime(3);

// - **Easy**: Write a function that returns the factorial of a number.
function factorial(_num) {
    let result = 1;
    for (let i = 1; i <= _num; i++) {
        result *= i;
    }
    console.log(`factorial of ${_num} is `,result);
}

factorial(5);

// - **Easy**: Write a function that takes a string and returns it with the first letter of each word capitalized.


// - **Medium**: Write a function that takes another function as an argument and runs it after a specified delay.

function timeOut(func, delay) {
    setTimeout(func, delay);
}

function greetings() {
    console.log("Heyaa");
}

timeOut(greetings, 2800);


// - **Medium**: Write a function that takes an array of numbers and returns a new array with each element doubled, but only if the original element was greater than 10.

function arrayFunction(arr) {
    let result= arr.map(num => {
        if (num > 10) {
           return num*2;
        } else {
            return num;
        }
    });
    console.log(result);
}
arrayFunction([1, 2, 3, 11, 12, 13]);