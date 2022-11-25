class Arrays {
    constructor(arr,object){
        this.배열생성방법 = {
            one : new Array(5),
            two : [],
            three : [1,2,3,4,5],
            four : new Array(5).fill(10),
            five : Array.from(Array(5),function(배열값,배열인덱스){return 배열인덱스+1})
        }
        this.배열함수모음 = {
            join : arr.join(","),           //,로 함치기
            reverse:arr.reverse(),          //뒤집기
            shift:arr.shift(),              //맨앞 요소 삭제
            unshift:arr.unshift(10),        //맨앞 요소 추가
            slice:arr.slice(2,5),           //2번째 5번째 요소를 잘라서 저장 , 원본 배열 삭제x
            splice:arr.splice(2,2),         //2번째 인덱스~ 2개 삭제  
        }

        this.객체생성방법 = {
            one : new Object(),
            two : {},
            three : {name:"김" , name2:"김", name3:"김"}
        }
        this.객체함수모음 = {
            delete : delete object.one,      //객체 중 one이라는 것 삭제
            in : 'two' in object,            //객체 중 two가 있는지
            value : Object.values(object),   //객체values 값 출력
            key : Object.keys(object),       //객체 key값 출력
        }
    }
}


var array = new Arrays([1,2,3,4,6,7],{one : "test" , two : "Test2", three : "Test3"})
console.log(array.객체함수모음.key)
