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

// 배열.reduce(()=>(accumulator(누적해서 더한 값), currentValue(현재 요소의 값), index, array)
// ,initialValue(accumulator어디서부터 더 할지))




//--------------------------------------------------------------------------------------------------------



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

// console.log("모음 제거하기")         --replace(/바꿀 문자열/ , '치환할 문자열')
// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g,'');
// }

// console.log("숨어있는 숫자의 덧셈(1)")
// function solution(my_string) {
//     var arr = [...my_string]
//     var answer = 0;
//     arr.forEach((element,index)=>{
//         if(parseInt(arr[index])){
//             answer += parseInt(arr[index])
//         }
//     })
//     return answer
// }

// console.log("가장 큰 수 찾기")
// function solution(array) {
//     console.log(...array)
//     var max = Math.max(...array)
//     var number = 0;
//     array.forEach((element,index)=>{
//         if(element === max){
//            return number = index
//         }
//     })
//     var answer = [max,number];
//     console.log(answer)
//     return answer;
// }

//console.log("개미 군단")
// function solution(hp) {
//     var first = parseInt(hp / 5)
//     var two = parseInt((hp % 5) / 3)
//     var three = parseInt(((hp % 5) % 3)/1)
//     console.log(first + two + three)
//     return first + two + three
// }

console.log("문자열 정렬하기")
function solution(my_string) {
    var arr = [...my_string]
    var arr2 = []
    var answer = [];
    arr.forEach((element,index)=>{
        if(Number(element)){
            arr2.push(parseInt(element))
        }
    })
    answer = arr2.sort()
    console.log(answer)
}
solution("abcde0")