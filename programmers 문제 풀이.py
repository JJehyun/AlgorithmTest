# print("6057번")
# a,b = input().split()
# if bool(int(a)) == bool(int(b)):
#     print(True)
# else:
#     print(False)

# print("6058번")
# a, b = input().split()
# c = bool(int(a))
# d = bool(int(b))
# print(not(c or d))

# print("6059번")
# a=int(input())
# print(~a)

# print("6060번")      - 비트 단위 연산 and = &
# a,b = input().split()
# print(int(a) & int(b))

# print("6061번")
# a,b = input().split()
# print(int(a) | int(b))

# print("6062번")
# a,b = input().split()
# print(int(a) ^ int(b))

# print("6063번")        -  파이썬 삼항 연산자
# a,b = input().split()
# c = int(a) if int(a)>int(b) else int(b)
# print(c)

# print("6064번")
# a,b,c = map(int,input().split())
# print((a if (a<b) else b)if ((a if (a<b) else b)<c) else c)

# print("6065번")
# a,b,c = map(int,input().split())
# if a%2==0:
#     print(a)
# if b%2==0:
#     print(b)
# if c%2==0:
#     print(c)

# print("6066번")
# a,b,c = map(int,input().split())
# if a%2==0:
#     print("even")
# else:
#     print("odd")
# if b%2==0:
#     print("even")
# else:
#     print("odd")
# if c%2==0:
#     print("even")
# else:
#     print("odd")

# print("6067번")
# a = int(input())
# if a<0:
#     if a%2==0:
#         print('A')
#     else : print('B')
# else:
#     if a%2==0:
#         print('C')
#     else : print('D')

# print("6068번")
# a = int(input())
# if a>=90:
#     print("A")
# elif a>=70:
#     print("B")
# elif a>=40:
#     print("C")
# else:
#     print("D")

# print("6069번")
# a = input()
# if a=="A":
#     print("best!!!")
# elif a=="B":
#     print("good!!")
# elif a=="C":
#     print("run!")
# elif a=="D":
#     print("slowly~")
# else:
#     print("what?")

# print("6070번")
# month = int(input())
# if month//3==1:
#     print('spring')
# elif (month-3)//3==1:
#     print('summer')
# elif (month-6)//3==1:
#     print('fall')
# else : print('winter')

# print("6071번")
# a = 1
# while a !=0:
#     b = int(input())
#     if b==0:
#         a = 0 
#         break
#     print(b)

# print("6073번")
# a = int(input())
# while a != 0:
#     print(a)
#     a = a - 1

# print("6074번")
# a = int(input())
# while a != 0:
#     a = a - 1
#     print(a)

# print("6075번")
# a = ord(input())
# t = ord('a')
# while t <= a:
#     print(chr(t),end=" ")
#     t = t + 1

# print("6075번")
# a = int(input())
# num = 0
# while num <= a:
#     print(num)
#     num = num + 1

# print("6076번")
# a = int(input())
# for i in range(a+1):
#     print(i)


# print("6077번")
# a = int(input())
# s = 0
# for i in range(1,a+1):
#     if i%2 == 0:
#         s += i

# print(s)

# print("6078번")
# a = 1
# while a == 1:
#     b = input()
#     print(b)
#     if b == "q":
#         a = 2
#         break

# print("6079번")
# x = int(input())
# result = 0

# for i in range(1, x+1):
#   result += i
#   if result >= x :
#     print(i)
#     break

# print("6080번")
# a,b = input().split()
# for i in range(1,int(a)+1):
#     for j in range(1,int(b)+1):
#         print(i,j)

# print("6081번")
# a = int(input(),16)
# for i in range(1,16):
#     print('%X*%X=%X' %(a,i,a*i))

# print("6083번")
# count = 0
# a,b,c = map(int,input().split())
# for i in range(0,a):
#     for j in range(0,b):
#         for k in range(0,c):
#             print(i , j , k)
#             count +=1

# print(count)

# print("6084번")
# h,b,c,s = map(int,input().split())
# m = (h* b * c * s)/8/1024/1024
# print('%.1f MB' %m)

# print("6085번")
# w, h, b = map(int,input().split())
# print("%.2f MB" %(round(w*h*b/8/1024/1024,2)))

# print("6086번")
# a = int(input())
# count = 0
# while count < a :
#     count +=1
#     count += count
# print(count)



# print("-----------------------------------------------------------------------------------")
# print("1402문제")    --순서대로 들어오는 배열 반대로 출력하기- 스택문제!!
# a = int(input())
# b = list(map(int,input().split()))
# b.reverse()
# for i in b:
#     print(i , end=" ")

# print("1714문제")    --입력된 숫자열 반대로 출력하기 -- 스택문제!!
# a = list(map(int,input()))
# a.reverse()
# for i in a:
#     print(i,end="")

# print("2001번")       --그리디 문제!!
# pasta=[]
# for i in range(3):
#     pasta.append(float(input()))

# juice=[]
# for i in range(2):
#     juice.append(float(input()))

# result = (min(pasta)+min(juice))*1.1
# print(format(result,".1f"))

# print("3301번")         -- / 나누기 , % 나머지 , // 몫 그리디 문제
# a = int(input())
# num = 0
# array = [50000,10000,5000,1000,500,100,50,10]
# for i in array:
#     num += a//i
#     a = a % i
# print(num)

# print("몫 구하기 문제")
# def solution(num1, num2):
#     answer = num1 // num2 
#     return answer

# print("나머지 구하기 문제")
# def solution(num1, num2):
#     answer = num1 % num2
#     return answer

# print("두 수의 차")
# def solution(num1, num2):
#     answer = num1 - num2
#     return answer

# print("숫자 비교하기 문제")
# def solution(num1, num2):
#     if num1 == num2:
#         answer = 1
#     else:
#         answer = -1
#     return answer

# print("각도기 문제")
# def solution(angle):
#     if angle < 90 : 
#         answer = 1
#     elif angle == 90 : 
#         answer = 2
#     elif angle < 180 : 
#         answer = 3
#     else : 
#         answer = 4
#     return answer

# print("짝수의 합 문제")
# a = int(input())
# answer = 0
# for i in range(a+1):
#     print(i)
#     if i % 2 == 0:
#         answer += i
# print(answer)

# print("배열의 평균값 문제")
# def solution(numbers):
#     result = 0
#     for i in numbers :
#         result += i
#     answer = result / len(numbers)
#     return answer

# print("중복된 숫자 개수")
# def solution(array, n):
#     answer = 0
#     for i in array:
#         if i == n :
#             answer += 1 
#     return answer

# print("중복된 숫자 개수") - 남의 풀이
# def solution(array, n):
#     return array.count(n)

# print("양꼬치 문제")
# def solution(n, k):
#     answer = (n * 12000) + (k * 2000) - (n//10 * 2000)
#     return answer

# print("두 수의 나눗셈")
# def solution(num1, num2):
#     answer = int(num1 / num2 * 1000)
#     return answer

# print("머쓱이보다 키 큰사람")
# def solution(array, height):
#     answer = 0
#     for i in array: 
#         if i > height:
#             answer += 1
#     return answer

# print("피자 나눠 먹기")
# def solution(n):
#     if (n/7).is_integer():
#         answer = n // 7
#     else :
#         answer = (n // 7) + 1
#     return answer

# print("편지 문제")
# def solution(message):
#     answer = len(message) * 2
#     return answer

# print("짝수 홀수 갯수 문제")
# def solution(num_list):
#     num1 = 0
#     num2 = 0
#     for i in num_list:
#         if i % 2 == 0 :
#             num1 += 1
#         else : 
#             num2 += 1
#     answer = [num1, num2]
#     return answer

# print("배열 뒤집기")
# def solution(num_list):
#     answer = num_list
#     answer.reverse()
#     return answer

# print("아이스 아메리카노")
# def solution(money):
#     cnt= money // 5500
#     change = money % 5500
#     answer = []
#     answer.append(cnt)
#     answer.append(change)
#     return answer

# print("배열 자르기")
# def solution(numbers, num1, num2):
#     answer = []
#     for i in range(num1,num2+1):
#         answer.append(numbers[i])
#     return answer

# print("피자 나누어 먹기")
# def solution(slice, n):
#     if (n / slice).is_integer() :
#         return n // slice
#     else :
#         return n // slice + 1

# print("문자열 뒤집기")
# def solution(my_string):
#     answer = ''
#     for i in my_string : 
#         answer = i + answer
#     return answer

# print("배열 두배 만들기")
# def solution(numbers):
#     answer = []
#     for i in range(len(numbers)) : 
#         answer.append(numbers[i] * 2)
#     return answer

# print("배열 원소의 길이")
# def solution(strlist):
#     answer = []
#     for i in strlist:
#         answer.append(len(i))
#     return answer

# print("최대값 만들기")
# def solution(numbers):
#     x = max(numbers)
#     numbers.remove(x)
#     y = max(numbers)
#     answer = x * y
#     return answer
# def solution(numbers):
#     numbers.sort()
#     return numbers[-2] * numbers[-1]

# print("옷 가게 할인 받기")
# def solution(price):
#     answer = 0
#     if price >= 500000:
#         answer = price * 0.8
#     elif price >= 300000:
#         answer = price * 0.9
#     elif price >= 100000:
#         answer = price * 0.95
#     else :
#         answer = price

#     return int(answer)

# print("짝수는 싫어요")
# def solution(n):
#     answer = []
#     for i in range(n+1) : 
#         if( i % 2 == 1) : 
#             answer.append(i)
#     return answer

# print("문자열안에 문자열")
# def solution(str1, str2):
#     if str2 in str1 : 
#         answer = 1
#     else : 
#         answer = 2 
#     return answer

# print("제곱근 판별하기")
# def solution(n):    
#     a = n ** 0.5
#     if int(a) == a:
#         return 1
#     else:
#         return 2