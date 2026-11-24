// find the largest number in an array in javascript.

const num = [1, 2, 3, 4, 5, 7, 8, 12,89];

// now using method

const findMax = (num) => {
  const max = Math.max(...num);

  console.log("max Num", max);
};

findMax(num);

// using HOC function

const maxNum = num.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return curr;
});

console.log("max Num", maxNum);

// withput method

const findLargestnum = (num) => {
  let largest = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }

  console.log("largest num", largest);
};

findLargestnum(num);

