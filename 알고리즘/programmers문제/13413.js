//   /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
console.log(input[0])