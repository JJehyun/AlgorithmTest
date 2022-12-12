let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n"); // example.txt
// 인풋
let n = inputs.shift();
let arr = inputs;
//해결
for (let i = 0; i < n; i++) {
  let result = 0;
  for (let item of arr[i]) {
    result += item == "(" ? 1 : -1;
    if (result < 0) break;
  }
  if (result == 0) console.log("Yes");
  else console.log("No");
}
