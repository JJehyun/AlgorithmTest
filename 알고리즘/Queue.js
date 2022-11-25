//배열로 구현
class Queue {
    constructor(){
        this.queue = [];
        this.front = 0; //맨앞 인덱스
        this.rear = 0;  //맨뒤 인덱스
    }

        //prototype
        //큐 값 추가
        enqueue(value){
            this.queue[this.rear++] = value;
            console.log(this.queue)
        }
        //앞에 있는 큐 가져오는 함수
        dequeue(){
            const value = this.queue[this.front];
            delete this.queue[this.front];
            this.front += 1;
            return value;
        }
        //맨앞의 값을 알아내는 함수
        peek(){
            return this.queue[this.front]
        }
        //큐의 길이 가져오기
        size(){
            return this.rear - this.front;
        }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);


//연결리스트로 큐 구현
class Node2{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue2{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size -=1;
        return value;
    }
    peek(){
        return this.head.value
    }
}