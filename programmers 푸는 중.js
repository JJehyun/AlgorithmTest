// console.log("Lv1 자릿수 더하기")
// function solution(n)
// {
//     return([...(n+'')].reduce((acc,cur) => parseInt(acc) + parseInt(cur) , 0))
// }

// console.log("하샤드 수")
// function solution(x) {
//     console.log(x % [...(x+'')].reduce((acc,cur)=> parseInt(acc) + parseInt(cur), 0) == 0 ? true : false) 
// }

// console.log("lV1 자연수를 뒤집어 배열로 만들기 / filter는 그대로 return")
// function solution(n) {
//     let arr2 = []
//    let arr = [...(n+'')].filter(i => arr2.push(Number(i)))
//    return arr2
// }

// console.log("짝수와 홀수 Lv1" )
// function solution(num) {
//     var answer = ""
//     if(num % 2 ==0){
//         answer = "Even"
//     }else{
//         answer = "Odd"
//     }
//     return answer;
// }
// solution(22)

// console.log("평균 구하기 Lv1")
// function solution(arr) {
//     var answer = 0;
//     arr.forEach((element) => {answer += element})
//     var answer = answer / arr.length
//     return answer
// }
// solution([1,2,3])

// console.log("LV1 약수의 합")
// function solution(n) {
//     var arr = [];
//     for(i=0;i<=n;i++){
//         if(n%i == 0){
//             arr.push(i)
//         }
//     }
//    return arr.reduce((acc,cur) => acc + cur, 0)
// }
// solution(10)

// console.log("Lv1 제곱근 판별")
// function solution(n) {
//     return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
//   }


// console.log("Lv1 문자열 내 p와y의 개수") 
// function solution(s){
//     var p = 0;
//     var y = 0;
//     s.toLowerCase().split('').map((element,index,arr)=>{
//         if(element == "p"){
//             p++
//         }else if(element == 'y'){
//             y++
//         }
//     })
//     return p == y ?true : false;
// }

// console.log("Lv1 문자열을 정수로 바꾸기")
// function solution(s) {
//     let arr = s.split('')
//     if(s[0]=="-"){
//         arr.shift();
//         return arr.join('') * -1
//     }else{
//         return Number(arr.join(''))
//     }
// }

// console.log("Lv1 x만큼 간격이 있는 n개의 숫자")
// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

// console.log("Lv1 정수 내림차순으로 배치하기")
// function solution(n) {
//     parseInt([...(n+'')].sort((a,b)=>b-a).join(""))
// }

// console.log("Lv1 나머지가 1이 되는 수 찾기")
// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }

// console.log("Lv1 두 정수 사이의 합")
// function solution(a, b) {
//     var answer = 0;
//     if(a<=b){
//     for(i=a; i<=b; i++){
//         answer += i
//             }
//         }else{
//     for(i=b; i<=a; i++){
//         answer += i
//             }
//         }
//     return answer;
// }

// console.log("Lv1 콜라츠의 추측")
// function solution(num) {
//     var answer = 0;
//     while(answer <= 500){
//         if(num === 1) return answer
//         num = num % 2 == 0 ? num/2 : (num * 3) + 1
//         answer++
//     }
//     return -1;
// }

// console.log("Lv1 서울에서 김서방 찾기")
// function findKim(seoul){
//     var idx = seoul.indexOf('Kim');
//     return "김서방은 " + idx + "에 있다";
//   }

// console.log("핸드폰 번호 가리기")
// function hide_numbers(s) {
//     return s.replace(/\d(?=\d{4})/g, "*");
//   }
  
// console.log("나누어 떨어지는 배열")
// function solution(arr, divisor) {
//     answer = arr.sort().filter(element => element%divisor === 0)
//     answer.length === 0 ? answer.push(-1) : answer.sort((a,b)=> a-b)
//     return answer;
// }

