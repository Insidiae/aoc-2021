const inputs = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const countIncrease = (arr) =>
  arr.reduce(
    (acc, num, idx) => (num > (arr[idx - 1] || Infinity) ? acc + 1 : acc),
    0
  );

function countIncrease2(arr) {
  let count = 0;
  let prev = arr[0] + arr[1] + arr[2];
  for (let i = 1; i < arr.length - 2; i++) {
    const current = prev - arr[i - 1] + arr[i + 2];
    if (current > prev) {
      count++;
    }
    prev = current;
  }
  return count;
}

console.log(countIncrease(inputs));
console.log(countIncrease2(inputs));
