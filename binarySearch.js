// Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.
const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q'];

function search(array, target) {
    for (let i=0; i<array.length; i++){
        if(array[i]=== target){
            return console.log(i);
        };
    }
    return console.log('-1');
}

function binarySearch(arr, target, start=0, end=arr.length-1) {

    console.log(start, end)

    if (start > end) {
        console.log('Not found!');
        return -1;
    } 

    const middle = Math.floor( (start + end) / 2 );

    if (arr[middle] === target) {
        console.log(`${target} Found at index ${middle}`);
        return middle;
    } 

    if(arr[middle] > target) {
        console.log('not found at ' + middle)
        return binarySearch(arr, target, start, middle - 1);
    }

    if(arr[middle] < target) {
        console.log("not found at " + middle);
        return binarySearch(arr, target, middle + 1, end);
    }

};

binarySearch(arr, "n");
