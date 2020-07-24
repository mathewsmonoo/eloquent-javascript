// Exercise 'The sum of a range'
// This function returns an array containing all the numbers from start up to (and including) end.
function range(start, end) {
  let myList = [];

  for (let i = start; i < end + 1; i++) {
    myList.push(i);
  }

  return myList;
}

// This function returns an in containing the sum from the items on given list.
function sum(myList) {
  let mySum = 0;
  for (let i = 0; i < myList.length; i++) {
    mySum = mySum + myList[i];
  }
  return mySum;
}

// This function returns an array containing all the numbers from start up to (and including) end.
// The difference is that it accepts "step" as an additional parameter, modifying the loop.
function range_modified(start, end, step = 1) {
  let myList = [];

  let myStep = Math.abs((end - start) / step) + 1;

  for (let i = 0; i < myStep; i++) {
    myList.push(start);
    start += step;
  }
  return myList;
}

myRange = range(0, 10);
console.log("Range: ", ...myRange, myRange);

mySum = sum(myRange);
console.log("Range Sum:", mySum);

myModRange = range_modified(5, 2, -1);
console.log("Modified Range: ", myModRange);

myModSum = sum(myModRange);
console.log("Mod Range Sum:", myModSum);

// Exercise 'Reversing an array'
function reverseArray(myArray) {
  let reversedArray = [];
  for (let i of myArray) {
    reversedArray.unshift(i);
  }
  return reversedArray;
}

function reverseArrayInLine(anotherList) {
  for (let j = anotherList.length; j > 0; j--) {
    console.log(j);
    anotherList.push(j);
    anotherList.shift();
  }
  return anotherList;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("List: ", list);
let reversedList = reverseArray(list);
console.log("Reversed: ", reversedList);
let anotherList = reverseArrayInLine(list);
console.log("Another: ", anotherList);

// Exercise 'A List'

// Exercise 'Deeep Comparison'
