// remove the first element of an array

// using array method

// using shift method

const fruits = ["banana", "graps", "cherry"];

console.log("fruits item before", fruits);

const removedItem = fruits.shift();

console.log("fruits items after", fruits);

// now using for loop

const fruits2 = ["banana", "apple", "watermelon"];

const removeFirstElement = (fruits2) => {
  const newArr = [];

  for (let i = 1; i < fruits2.length; i++) {
    newArr.push(fruits2[i]);
  }

  console.log("new array", newArr);
};

removeFirstElement(fruits2);

// using slice method

const fruits3 = ["strawberry", "pineapple", "apple"];

const remainedFruits = fruits3.slice(1);

console.log("using slice", remainedFruits);
