// arr.map(function(element, index, array){    --map--
// 	console.log(this) // 80
// }, 80);

// numbers.filter((number, index, source) => {
//      element: 요소값
//      index: source에서 요소의 index
//      source: 순회하는 대상
// });

// 배열.forEach((currentElement, index, array) => {
//     currentElement
//     index
//     array
// });

// console.log("삼각형 완성 조건")
// function solution(sides) {
//     const max = Math.max(...sides);
//     return max < sides.reduce((a, c) => a + c, 0) - max ? 1 : 2;
//   }
  
// console("문자 반복 출력하기")
// function solution(my_string, n) {
//     let answer = []
//     answer=[...my_string].map(element => element.repeat(n)).join("")
//     console.log(answer)
//     return answer
//   }

// console.log("배열의 유사도")
// function solution(s1, s2) {
//     var answer 
//     answer = s1.filter( element => s2.includes(element))
//     console.log(answer)
// }

// console.log("세균 증식")
// function solution(n, t) {
//     for (i=0;i < t; i++)
//         n = n * 2
//     return n;
// }

// console.log("순서쌍의 개수")
// function solution(n) {
//     var answer = 0;
//         for (i = 1 ; i < n+1; i++){
//             if(n % i === 0){
//                 answer += 1
//             }
//         }
//         console.log( answer)
//     }
// solution(20)

// console.log("자릿수 더하기")
// function solution(n) {
//     n = n.toString()
//     var answer = 0;
//     for (i=0;i<n.length;i++){
//         answer += parseInt(n[i])
//     }
//     return answer
// }
