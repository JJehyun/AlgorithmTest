let 이름 : string | boolean | null | undefined  = 'kim'
let array : string[] = ["kim" , "lee"]              // array-> 배열에 문자열만 가능
let 객체 : {name? :string} = { name : "이름"}       // 갹체에 name은 string 일 수도 아닐 수도 있음
type 타입변수 = string | number;
let 타입객체사용 : 타입변수 = 123
/*
* 함수에서의 타입 스크립트 input = 숫자 / output 숫자
*/
function 함수(x : number) : number{
    return 3
}
/*
* array 에서 사용하는 tuple 타입 array 자리마다 타입을 지정하는 것
*/
type 튜플타입 = [number,string]
var 튜블타입사용 : 튜플타입 = [123,"스트링"]
/*
* 객체에서의 type 지정  글자로된 object속성타입은 string
*/
type 오브젝트타입 = {[key : string] : string}
let john : 오브젝트타입 = {name : "이름" , age :'123'}