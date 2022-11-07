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