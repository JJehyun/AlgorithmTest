var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var 이름 = 'kim';
var array = ["kim", "lee"]; // array-> 배열에 문자열만 가능
var 객체 = { name: "이름" }; // 갹체에 name은 string 일 수도 아닐 수도 있음
var 타입객체사용 = 123;
/*
* 함수에서의 타입 스크립트 input = 숫자 / output 숫자
*/
function 함수(x) {
    return 3;
}
/*
* 함수에서 파라미터가 들어올 수 도 있고, 안들어올수도 있을 때 (파라미터?)   변수?: number  === 변수 : number | undefined
*/
function 함수2(x) {
    1 + 1;
}
/*
* Type Narrowing 애매한 type를 만나면 Narrowing 해야함 타입이 2개일 때 한개로 정하는 것 &&!!!!!
*/
function 함수3(x) {
    if (typeof x === "string") {
        console.log("String");
    }
    else {
        console.log("Number");
    }
}
function 네로잉1(a) {
    if (a && typeof a === "string") {
        console.log(" a가 undefined or null 이면 if문 실행 ,, a가 string이면 if문 실행!!!");
    }
}
function 네로잉2(파라미터) {
    if ('swim' in 파라미터) {
        console.log('in 키워드로 object 속성이 swim 가진것');
    }
}
function 네로잉3(파라미터) {
    if (파라미터.wheel === '2개') {
        console.log("A1일 경우");
    }
}
var 튜블타입사용 = [123, "스트링"];
var john = { name: "이름", age: '123' };
var 리드온리 = {
    name: "리드"
};
var 변수임 = { x: 1, y: 2 };
var A = "대머리";
function 햄수(a) { return 1; }
var 함수에함수타입지정 = function (a) { return 3; };
/*
* class 관련 상속관련 !!!
*/
var Person = /** @class */ (function () {
    function Person(파라미터) {
        this.name = 파라미터;
    }
    Person.prototype.함수 = function (a) {
        console.log("하이");
    };
    return Person;
}());
var 사람입니다 = new Person('이름');
사람입니다.함수("1");
var 네모 = { color: 'red', width: 100, hi: "하이" };
/*
* rest parameter ... 관련
*/
function rest함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
/*
* destucturing 관련
*/
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
/*
* public(기본적으로는 다 public이 숨겨져 있음) or private (private가 붙으면 무조건 class안에서만 수정이 가능하다.)
*/
var 클래스 = /** @class */ (function () {
    function 클래스(파라미터) {
        this.familtName = "kim"; //private 수정 불가능
        this.name = 파라미터 + this.familtName;
    }
    클래스.prototype.이름변경함수 = function () { this.familtName = "park"; }; //park으로 변경됨 함수를 사용해서
    return 클래스;
}());
var 이름이름 = new 클래스("민수"); // kim민수가 출력됨
/*
* protected를 사용하면 class{}안에서 + extends된 class{}안에서 protected된 변수를 수정 할 수 있다.
*/
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var newUser = /** @class */ (function (_super) {
    __extends(newUser, _super);
    function newUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 20; //protected 는 class끼리 변수 변경 가능
        return _this;
    }
    return newUser;
}(User));
/*
* static 키워드 사용  (static이 사용된 변수는 자식이 사용할 수 없다.) , 부모 class만 사용할 수 있다.
*/
var Static = /** @class */ (function () {
    function Static() {
        this.y = 10;
    }
    Static.x = 10;
    return Static;
}());
console.log(Static.x);
