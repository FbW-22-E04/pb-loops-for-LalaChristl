let sum = 0;

for (let i = 1; i <= 20; i++) {
  sum = sum + i;
  console.log(sum);
}

console.log("-------------------------------------");

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle of beer on the table.`);
  } else {
    console.log(`There are ${i} bottles of beer on the table.`);
  }
}

console.log("-------------------------------------");

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}

console.log("-------------------------------------");

let result = 0;

for (let i = 1; i <= 10; i++) {
  result = i * 9;
  console.log(result);
}

console.log("-------------------------------------");

for (let i = 1; i <= 10; i++) {
  console.log("Multiplication table of", i, "is:");
  for (let j = 1; j <= 10; j++) {
    console.log(i, "x", j, "=", i * j);
  }
}

console.log("-------------------------------------");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("-------------------------------------");

let sumOfMultiples = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    sumOfMultiples += i;
  }
}
