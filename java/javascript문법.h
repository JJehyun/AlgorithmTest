/**
* TODO ==> this란 3가지의 뜻을 가진다. 
** 1. Window라는 객체를 나타낸다. window객체 안에는 [자바스크립트 기본 함수]를 가지고 있다. // 일반 함수에서의 this 는 window
**    -함수나 변수를 만들면 전역공간 window 객체에 저장된다.
** ex) console.log(window)
** 
** 2.객체 안에 있는 함수 [메소드] 에서의 this ==> !그 함수를 가지고 있는 오브젝트를 뜻한다!
** ex) var object = {fun : functon(){console.log(this)}}
** 
** 3.이벤트 리스너에서의 this ==> !지금 이벤트가 동작하는 곳을 의미한다.!
** ex) HTML.addEventListener('click' , function(){this})
** 
** 4.arrow function에서의 this ==> !상위 객체, 함수의 this값을 그대로 물려받음!(외부의 this값을 그대로 사용할 수 있는 장점이 있음)
**  -arrow function에서 this와 function ()에서의 this 값은 다르다.!
** ex)var 오브젝트 = {
** 이름들 : [1,2,3]
** 함수 : function(){
**     console.log(this)                                    ----> 여기 this를
**      오브젝트.이름들.forEach(()=>{console.log(this)})      ---->arrow function은 그대로 사용이 가능하다.
**  }
** 
** 
* TODO ==> arrow function (함수 선언) / tagged literal / 함수 관련
* ?  var 함수 = (a) => {return a + 10}                                      ------> 일반적인 arrow 함수
* ?  var 함수 = a => {return a + 10}                                        -------> 파라미터가 하나일때는 소괄호를 생략가능하다.
* ?  var 함수 = a => a + 10                                                 -------> {}가 한줄이면  {}와 return를 생략할 수 있다.
* ? 
* ? 
* ? taggled literal 함수``
* ? 함수()  == 함수``                                                       ------> 똑같이 함수를 실행 시키는 구문 
* ? 
* ? 
* ? fun(one,two,three,four){}                                               ------->함수 선언
* ? fun`안녕 ${변수1} 하이 ${변수2} 이하 {변수3}`                             -------->tagged literal로함수 실행
* ? ------------------------------------------
* ? one = ["안녕","하이","이하"] two =변수1 / three = 변수2 / four = 변수3    -----> tagged literal결과
* ? 
* ? 
* ? *default parameter*
* ? fun(a,b=10 * a){ // }                                                       ------> fun함수를 호출 할 때 a파리미터는 넣고 B파라미터를 안 넣으면 B값을 고정할 수 있다.
* ? fun(3)
* ? 
* ? *arguments (파라미터를 쉽게 다루기 위함)*
* ? fun(A,B,C) {argument[0] , argument[1] , argument[2]}
* ? argument[0] == 첫번째 파라미터  ,  argument[1] == 두번째 파라미터 , argument == 세번째 파라미터
* ? 
* ? *Rest 파라미터 (모든 파라미터를 배열에 넣어서 관리 위함)*
* ? fun(A,B,...파라미터들){console.log(파라미터들)}                                 ---------->모든 파라미터를 배열로 만들어줌
* ? fun(1,2,3,4,5,6,7)                                                            ---------->결과: [3,4,5,6,7]
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* TODO ==> 변수 관련 var / let / const  (선언,할당,범위) , 자료형
**           ***자바스크립트는 맨위에 변수 선언 부터함(호이스팅)***
** var -> 재선언O, 재할당 O
** ex)  var age = 20
**      var age = 20 --> var만 재선언이 가능O , let,const는 불가능X
** 
** 
** let -> 재선언 X , 재할당 O
** ex)  let age = 20
**          age = 30 --> 재할당 가능O
** 
** 
** const -> 재선언 X , 재할당 X
** ex)  const age = 20 
**            age = 30-->XX const는 재할당이 불가능
** ex) const age = [나이 : 20]
**            age.나이 = 30 ----> OOO 배열안의 값을 변경했으므로 OOO가능, 재할당이 아님! 사용가능!
** 
** 
**          ***array destructiong*** 변수에 값을 넣는 희안한 방법!
** var [a,b,c = 10] = [2,3];                            ---->a=2 / b=3 / c=10 변수에 할당됨
** var {name , age} = {name : 'kim', age : 30}          ---->name = 'kim' / age = 30 변수에 할당됨
** 
** 
**           ***literals**** 
** --> `문자문자문자${변수}`
** 
** 전역변수 만들기
** (1) let 전역 = 0     ||    (2) window.전역 = 0
** 
** 
**          ***object key값과 value값이 같을때 객체 생성하기***
** var name = "kim" / var age = 30
** var obj ={name : name , age : age}  or  var obj = {name , age}  ---> 둘 다 같은 말임
** 
** 
** 
** Map자료형 , Set자료형 자료간의 의존성을 너터내고 싶을 때 가끔 사용하는 자료형이다.
**      &&&Map 자료형&&&
**      var person = new Map();                                    ---->map 자료형 선언하기
**      person.set('name', 'kim')                                  ---->set으로 자료 추가    person = {'name' => 'kim'}로 저장됨
**      person.ser('age', 20)                                      ---->set으로 자료 추가    person = {'age' => 20}로 저장됨
** 
**      person.get('age')                                          ---->get으로 자료 출력    //20
**      
**      
**         *****set 자료형 중복을 허용하지 않는 array****
**      var 출석부 = new Set (['A', 'A' , 'C' , 'D'])              -----> SET은 중복을 허용하지 않아서 [A,C,D]가 저장된다.
**      출석부.ADD('값 추가 하기')
**      출석브.delete('값 제거 하기')
**      출석부.size                                                ----->array의 길이
** 
** 
* TODO ...spread operator ---> [] 대괄호를 없애주는 것 . {} 중괄호도 없애줌 
* ? var arr = ['hello' , 'world']
* ? ...arr                                               -----> hello world 대괄호 제거
* ? 
* ? var word = 'hello' 
* ? ...word                                              -----> 'h' 'e' 'l' 'l' 'o' 대괄호 제거
* ? 
* ? 
* ? *배열 합치기*
* ? var a = [1,2,3] var b =[4,5]
* ? var c = [...a , ...c]                                ------> c = [1,2,3,4,5]
* ? 
* ? 
* ? *배열 복사*
* ? var a = [1,2,3]                                      ------>a ,b는 값을 공유한다. a에 값을 추가하면 b에도 자동으로 추가됨!!
* ? var b = a
* ? ---------------
* ? var a = [1,2,3]                                      ------->a,b는 값을 공유하지 않는다  XXX  (Deep copy 라고 함)
* ? var b = [...a]
* ? 
* ? 
* ? 
* ? 함수에 파라미터 형식으로 넣고 싶을 때 (spread operator 방식)
* ? fun(a,b,c){}                                         --------> 함수 선언
* ? var l1 = [1,2,3]
* ? fun[...l1]                                           -------->spread opearator 빙식으로 함수에 파라미터 넣기
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
*  TODO Construtor(Object 생성 기계~!) 문법    함수는  prototype(부모의 유전자)이라는 유전자를 가진다.
** fun(){this.name = '김'; this.age=20; 하이 = function(){}}                   ------>object 찍어내는 공장
** var 사람 = new fun();                                  ------>object 찍어내는 방법 new를 붙이면 됨!!
** 
** 
** prototype은 유전자 -> 모든 prototype에 값을 추가하면 모든 자식들이 물려받을 수 있다.
** fun(a){this.name = a;}                                 ------>object틀
** fun.prototype.학년 = 4                                 ------>object틀에 유전자 등록(함수 등록)
** var 하나 = new fun(김)                                 ------>object 찍어냄
** 하나.학년 ===>4                                        ------>유전자에 있는 함수 실행!!
** 
** 
* TODO ?? .? optional chaning 자바스크립트 최신 문법
** 
** console.log(----?.())                                 ----->  ----값이 있으면 .뒤의 내용을 실행 시킴
** console.log( undefined || null ?? "로딩 중"  )            ---->   ??앞에 undefined 나 null 이 들어오면 ??뒤의 문자를 실행한다.
** 
** 
* TODO : ES6 상속 기능 추가 Class
* ? Class 부모{                                                 ---->!!!!!ES6 객체 뽑는 기계!!!!!!!!
* ?  constructor(파라미터){
* ?         this.name = 'kim'
* ?         this.sayHi = function(){console.log}
* ?       }
* ?     함수(){}                                               ----->여기다가 함수를 추가하면 prototype에 추가가 된다.(부모.prototype에 추가됨)
* ? }
* ? 
* ? var 자식 = new 부모(파라미터);                              ----->!!!!!!!!자식이라는 객체 뽑음!!!!!!!!!!
* ? 
* TODO : ES6 상속 super, extends
* ? 
* ? Class 할아버지 {                                            -----> 객체 뽑는 기계
* ?     constructor(name){
* ?     this.성 = 'kim'
* ?     this.이름 = name}
* ?     함수(){}                                               ------> prototype에 함수 추가 하기
* ? }
* ? 
* ? Class 아버지 extends 할아버지 {
* ?     constructor(name){}
* ?     super(name)                                             -----> super의 의미 === constructor(name){this.성="kim" this.이름=name} 아래내용을 그대로 가져오는 것
* ?     this.나이 = 50;
* ? }
* ? 
* ? var 아버지1 = new 아버지("이름")
* ? 
* TODO : getter setter 객체에 있는 함수를 이용해서 객체 내 변수를 수정하기1
** var person ={
**  name : "김",
**  age : 30 ,
**  
**  get 가져오기함수(){ return this.age + 1 }                  ------>get 키워드를 사용하면 변수 처럼 사용이 가능하다.(return이 꼭 있어야 함!)
**  set 넣기 함수(나이){this.age = perseInt}                   ------>set 키워드를 사용하면 변수 처럼 사용이 가능하다.(파라미터를 꼭 있어야 함!)
** } 
** 
** 사람.가져오기함수;                                          ------> 함수라서 () 붙여야하지만 get 키워드를 함수 앞에 붙여줬기 때문에 () 안붙여도 됨
** 사람.널기 함수 = 20                                         ------>함수 라서 [사람.넣기(20)] 사용 해야 하지만 변수 처럼 사람.넣기 = 20로 사용 가능
** 
** 
**
*  TODO import , export
* ?  import 가져올거(작명 가능) from 경로
* ?  export default 보낼 거                                    -----> export default 파일당 한개!
* ? 
* ?  여러개를 보내고싶을 때
* ?  export var {a} , export var {b} , ....                   ------> 보낼 때는 {} 넣어서!
* ?  import {a as 별명 ,b(이름을 정확히) as 별명)} from 경로                     
* ? 
* ? 
*  TODO Promise 관련!! 비동기 관련 
** var 프로미스 = new Promise();                                    ------> !!!!promise는 성공, 실패 판정 기계이다!!!!
** 프로미스.then(function(){1번째 실행}).then(function(){1번째 실행 후 2번째 실행}).then({function(){2번째 실행 후 3번째 실행}})....>
** 
**  ***Promise 관련 예제***
**  var 변수 = new Promise(function(AA , BB){ 
**      AA();  }) 
** 
**  변수.then(function(){ promise에서 AA()이 실행 됐을 때}).catch(function(){ Promise에서 BB()가 실행 됐을 때!!})
**
**  ***최근 방법 async , await ***
**  async 함수1(){console.log("하이")}                                               -----> promise를 return함 -> then를 사용가능!! var 변수 = new promise 안해도 됨
**  var 결과 = await 프로미스                                                         ----->코드를 쭉 내려가다가 await 프로미스를  프로미스가 해결될때 까지 기다려~~~ 기다린다.!!
**  함수1().then(function(){})                                                       -----> 실제 사용
** 
**   **try catch 구문**
**     try{} catch {}
** 
**
*  TODO : apply 함수
* ! var A = { hi : function(){ console.log("하이") } }
* ! var B = { name : "오호" }
* ! A.hi.apply(B)                        ---------------------> A객체 안의 함수 (hi)를 B안에서 실행시키는 함수 (함수.apply(실행 시킬 곳 객체 , 파라미터1, 파리미터2,...))
* !
* TODO : 자바스크립트의 내장 함수
* ? 
* ? for (var key in 오브젝트){
* ?         <오브젝트의 키 값을 출력해주는 for문!>  // console.log(오브젝트[key])
* ? }
* ? 
* ? //
* ? for (var element of 어레이){
* ?     console.log(element)
* ? }
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* ? 
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* !
* ? 
*/