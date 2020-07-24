// Exercise 'Looping a Triangle'
let myString = '' ;
for (let i = 0; i <7; i++){
  myString += '#';
  console.log(myString + ' ' + myString.length);
}

// Exercise 'FizzBuzz'
for(let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  }
  else if (i % 3 === 0){
    console.log('Fizz');
  }
  else if (i % 5 === 0){
    console.log('Buzz');
  }
  else {
    console.log(i)
  }
}

// Exercise 'ChessBoard'
let size = 8;
let myString = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 === 0)
      myString += " ";
    else
      myString += "#";
  }
  myString += "\n";
}
console.log(myString);