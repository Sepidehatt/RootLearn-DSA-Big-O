/* 
1. What is the Big O for this?

  1. constant time =>>> O(1)
  2.Linear =>>> O(n)


2. 
function isEven(value) {
    if (value % 2 === 0) {
        return true;         =>>>> O(1)
    }  
    else {
        return false;        =>>> O(1)
    }
}

O(1) + O(1) = 2*O(1) ==> Big-O ignores repetitive -constant value
or less O value it means the result is ==> O(1)



3.
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {     =>>>O(n)
        const el1 = arr1[i];                   
        for (let j = 0; j < arr2.length; j++) {  =>>> O(n)
            const el2 = arr2[j];                
            if (el1 === el2) return true;
        }
    }
    return false;
}

Nested loop
O(n) * O(n) = O(n^2)


4.
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {  =>>> O(n)
        array[i] *= 2; 
    }
    return array;
}

a loop >> it depends of input array length.
 longether array === increase the time of iteration



 5.
 function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) { =>>> O(n)
        if (array[i] === item) {       =>>> O(1)
            return i;
        }
    }
} 

loop :
O(n)


6.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {     =>>> O(n)
        for(let j = i + 1; j < arr.length; j++) {     =>>> O(n-1)
            console.log(arr[i] + ", " +  arr[j] );    =>>O(1)
        }
    }
}

Nested loop 
O(n) * O(n-1)= O(n^2 - n) =>> Big-O notation ignores
less value of n 
result =>> O(n^2)


7.
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) { =>>> O(n)

        if (i === 1) {    =>>> O(1)
            result.push(0);
        }
        else if (i === 2) {  =>>> O(1)
            result.push(1);
        }
        else {     =>>> O(1)
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

Big-O ignores constants
loop:
O(n)


8.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);  =>>> O(logn)
        currentElement = array[currentIndex];

        if (currentElement < item) {    =>>> O(1)
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {   =>>> O(1)
            maxIndex = currentIndex - 1;
        }
        else {    =>>> O(1)
            return currentIndex; 
        }
    }
    return -1;
}

because of currentIndex, we never search all the array,we start our search
from /2 , and again /2 until find our result
the Big-O answer is =>>  O(logn)



9. Random element
code Snippet is not working, so i can't see anything to answer :)


10.
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) { =>>> O(1)
        return false;
    }
    for (let i = 2; i < n; ++i) { =>>> O(n)
        if (n % i === 0) return false; =>>> O(1)
    }
    return true;
}

( O(1)*O(n) ) + O(1) ===ignore constants ==>> O(n)
*/