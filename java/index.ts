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
* 함수에서 파라미터가 들어올 수 도 있고, 안들어올수도 있을 때 (파라미터?)   변수?: number  === 변수 : number | undefined
*/
function 함수2(x? : number) : void{
    1+1
}
/*
* 타입 파라미터 number라는 타입이 $$$아무이름$$$에 다 들어간다. Generic함수
*/
function 함수파미터더<아무이름>(x : 아무이름[]) : 아무이름{        // number라는 타입이 아무이름에 다 들어간다.
    return x[0]
}
let 변수라네 = 함수파미터더<number>([0,1])
function 함수파미터더2<아무이름2 extends number>(x : 아무이름2){
    console.log("extends는 옆에 있는 number type를 포함하는지 체크해주는 역할을 해준다")
    return x -1
}
let 아무 = 함수파미터더2<number>(100)


/*
* Type Narrowing 애매한 type를 만나면 Narrowing 해야함 타입이 2개일 때 한개로 정하는 것 &&!!!!!
*/

function 함수3(x : string|number){
    if(typeof x === "string"){console.log("String")}else{
        console.log("Number")
    }
}

function 네로잉1(a:string | undefined) {
    if(a && typeof a === "string"){
        console.log(" a가 undefined or null 이면 if문 실행 ,, a가 string이면 if문 실행!!!")
    }
}

type Fish = {swim : string}
type Bird = {fly : string}
function 네로잉2(파라미터 : Fish | Bird) {
    if('swim' in 파라미터){
        console.log('in 키워드로 object 속성이 swim 가진것')
    }
}

type A1 = {wheel : "4개"}
type A2 = {wheel : "2개"}
function 네로잉3(파라미터:A1 | A2){
    if(파라미터.wheel === '2개'){
        console.log("A1일 경우")
    }
}

/*
* array 에서 사용하는 tuple 타입 array 자리마다 타입을 지정하는 것
*/
type 튜플타입 = [number,string]
var 튜블타입사용 : 튜플타입 = [123,"스트링"]
let 튜블스사용 : [string, null,boolean?] = ["dog", null]
function 튜블함수(...x : [number , string]){}

/*
* 객체에서의 type 지정  글자로된 object속성타입은 string
*/
type 오브젝트타입 = {[key : string] : string}
let john : 오브젝트타입 = {name : "이름" , age :'123'}
/*
* 객체에서의 type readonly설정 , 객체 안에  name를 변경 할 수없게 하는 것
*/
type 오브젝트리드온리 ={
    readonly name: string
}
const 리드온리 : 오브젝트리드온리 ={
    name : "리드"
}
/*
*  &를 이용해서 두개의 타입변수를 합쳐서 하나의 다른 타입변수를 만들기 / extend 하기
*/
type obj1 = {x : number}
type obj2 = {y : number}
type obj3 = obj1 & obj2
const 변수임 : obj3 = {x : 1 , y : 2}

/*
*  lITeral type 지정하기 TYPE으로 글자열 강제 하기! , 어떤 문자열이 올지 엄격하게 관리
*/
type 접니다 = "대머리" | "머리"
const A : 접니다 = "대머리"
function 햄수(a : "파라미터" | "파라미터2") : 1|2 {return 1}

/*
* 함수에 함수 타입 지정하기~~~
*/
type 함수타입3 = ( a : string) => number;   //input string , output : number
let 함수에함수타입지정 : 함수타입3 = (a)=>{return 3}
/*
* class 관련 상속관련 !!!
*/
class Person{
    name:string;
    constructor(파라미터 : string) {
        this.name = 파라미터
    }
    함수(a : string) :void{
        console.log("하이")
    }
}

let 사람입니다 = new Person('이름');
사람입니다.함수("1")

/*
* interface 관련!!! 상속이 가능한 것
*/
interface Square {
    color : string,
    width : number
}
interface Square2 extends Square{
    hi : string
}
let 네모 : Square2 = {color : 'red' , width : 100 , hi : "하이"}
/*
* rest parameter ... 관련
*/
function rest함수(...a : number[]) : void{
    console.log(a)
}
/*
* destucturing 관련 
*/
let {student : student , age : age} = {student : true , age : 20}
/*
* public(기본적으로는 다 public이 숨겨져 있음) or private (private가 붙으면 무조건 class안에서만 수정이 가능하다.)
*/
class 클래스{
    name : string;
    private familtName : string = "kim"                             //private 수정 불가능
    constructor(파라미터 : string){
        this.name = 파라미터 + this.familtName
    }
    이름변경함수(){this.familtName = "park"}                        //park으로 변경됨 함수를 사용해서
}
let 이름이름 = new 클래스("민수")                                    // kim민수가 출력됨
/*
* protected를 사용하면 class{}안에서 + extends된 class{}안에서 protected된 변수를 수정 할 수 있다.
*/
class User{
    protected x : number = 10
}
class newUser extends User {
    x = 20;                                                         //protected 는 class끼리 변수 변경 가능
}
/*
* static 키워드 사용  (static이 사용된 변수는 자식이 사용할 수 없다.) , 부모 class만 사용할 수 있다.
*/
class Static {
    static x = 10;
    y =10;
}
console.log(Static.x)
/*
* namespace 관련 import , export
*/
namespace 아무이름 {
    export type Name = string | null
}
let 아무거나 : 아무이름.Name = "sss"
/*
* 
*/