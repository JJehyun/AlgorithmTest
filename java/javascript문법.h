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
* TODO ==> 변수 관련 var / let / const  (선언,할당,범위)
** 자바스크립트는 맨위에 변수 선언 부터함(호이스팅)
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
** literals 
** --> `문자문자문자${변수}`
** 
** 전역변수 만들기
** (1) let 전역 = 0     ||    (2) window.전역 = 0
** 
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
** 
** 
** 
** 
** 
** 
** 
** 
** 
** 
** 
** 
** 
** 
** 
*  TODO : apply 함수
* ! var A = { hi : function(){ console.log("하이") } }
* ! var B = { name : "오호" }
* ! A.hi.apply(B)                        ---------------------> A객체 안의 함수 (hi)를 B안에서 실행시키는 함수 (함수.apply(실행 시킬 곳 객체 , 파라미터1, 파리미터2,...))
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