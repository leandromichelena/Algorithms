// Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.

const arr = [1, 2, 3, 4, 5, 6, 7]

function cumulativeSum(arr) {
    console.log('Array length is ' + arr.length);
    let sum = 0

    for(i=0; i<arr.length; i++){
        sum += arr[i]
        console.log('sum is ' + sum + ' at index ' + [i]);
    };
    console.log('final sum is ' + sum);
};

cumulativeSum(arr);