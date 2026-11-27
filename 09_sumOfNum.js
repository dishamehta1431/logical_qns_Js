const num = [1, 23, 45, 67, 14, 31, 12, 35, 67, 24, 56];

const total = (num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  console.log("sum is: ", sum);
};
total(num);

// using hoc reduce method

const sum2 = num.reduce((acc, curr) => {
  acc += curr;
  return acc;
});

console.log("sum is: ", sum2);

// using for loop

const findSum = (num) => {
  let sum = 0;
  for (let i of num) {
    sum += i;
  }
  console.log("sum is: ", sum);
  
};

findSum(num);
