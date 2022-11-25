let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
var stack = [];
var answer = '';
for(var i in input){
    if(input[i].split(' ').length === 1){
        if(input[i] === 'pop'){
            if(stack.length !== 0){
                answer = answer + stack.pop() + '\n';
            }else{
                answer = answer + '-1\n';
            }
        }else if(input[i] === 'size'){
            answer = answer + String(stack.length) + '\n';
        }else if(input[i] === 'empty'){
            if(stack.length === 0){
                answer = answer + '1\n';
            }else{
                answer = answer + '0\n';
            }
        }else if(input[i] === 'top'){
            if(stack.length !== 0){
                answer = answer + stack[stack.length-1] + '\n';
            }else{
                answer = answer + '-1\n';
            }
        }
    }else{
        stack.push(input[i].split(' ')[1]);
    }
}
console.log(answer);