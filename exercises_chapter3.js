// Exercise 'Minimum'
function getMinimum(a, b = 0){
    if (a < b){
      return a;
    }
    else {
      return b;
    }
}

// Exercise 'Recursion'
function isEven(a){
    if (a > 1){
        return;
    } 
}

// Exercise 'Bean Counting'
function countBs(myString){
  stringSize  = myString.length;
  let counter = 0;
  for (let i  = 0 ; i < stringSize; i++){
    if (myString[i] === 'B'){
      counter++;
    }
  }
  return counter;
}
let stringA = "1Band12Char";
console.log(countBs(stringA))

function countChar(myString, myChar = 'B'){
  stringSize  = myString.length;
  let counter = 0;
  for (let j = 0 ; j < stringSize ; j++){
    if (myString[j] === myChar){
      counter++;
    }
  }
  return counter;
}

let myChar  = prompt('Insert a Char');
let stringB = prompt('Insert a String');
console.log(countChar(stringB,myChar));