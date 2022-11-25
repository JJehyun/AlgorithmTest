// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input =[5,'3 1 4 3 2']

// const people = input[0];
// const time = input[1]
//     .split(" ")
//     .map((item) => +item)
//     .sort((a, b) => a - b);

// let result = 0;
// let save = 0;
// for (let i = 0; i < people; i++) {
//     save += time[i];
//     if (save > 0) {
//         result += save;
//     } else {
//         result += time[i];
//     }
// }

// console.log(result);