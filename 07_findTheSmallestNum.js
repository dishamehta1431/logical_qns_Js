const num = [8, 23, 45, 78, 34, 78, 68, 78, 11, 34, 45];

// using math.min() method

const smallestNum = Math.min(...num);

console.log("smallest num is:", smallestNum);

// using loop

const findsmallestNum = (num) => {
  if (num.length === 0) {
    console.log("array is empty");
    return;
  }
  let smallestNum = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] < smallestNum) {
      smallestNum = num[i];
    }
  }

  console.log("smallest num is:", smallestNum);
};

findsmallestNum(num);

// using reduce HOC

const smallNum = num.reduce((acc, curr) => {
  if (curr < acc) {
    acc = curr;
  }

  return acc;
});

console.log("smallest num is:", smallNum);
