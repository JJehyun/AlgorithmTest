# print("6018번")
# a,b = input().split(":")
# print(a,b,sep=":")


# print("6019번")
# a,b,c = input().split(".")
# print(c,b,a,sep="-")


#print("6020번")
# a,b = input().split("-")
# print(a,b,sep="")

#print("6021번")
# a = input()
# num = 0
# while num < len(a):
#     print(a[num])
#     num = num + 1

#print("6022번")
# a = input()
# print(a[0:2],a[2:4],a[4:6])

#print("6023번")
# a,b,c = input().split(":")
# print(b)

#print("6024번")
# a,b = input().split()
# print(a,b,sep="")

#print("6025번")
# a,b = input().split()
# c = int(b) + int(a)
# print(c)


#print(6026반)
# a = float(input())
# b = float(input())
# print(a+b)

#print(6027번)
# a = int(input())
# print("%x"%a)

#print(6028번)
# a = int(input())
# print("%X"%a)

#print(6029번) - 진수
# a = int(input(), 16)
# print("%o"%a)

# print("6030번") - 유니코드 변환
# a = ord(input())
# print(a)

#print("6031번")
# a = int(input())
# print(chr(a))

# print("6031번")
# a = int(input())
# print(chr(a))

# print("6032번")
# a = int(input())
# print(-a)

# print("6033번")  -- ord : 문자를 유니코드로 chr : 유니코드를 문자로
# a = ord(input())
# print(chr(a+1))

# print("6034번") 
# a,b = input().split()
# c = int(a)
# d = int(b)
# print(c-d)

# print("6035번")
# a,b = input().split()
# c = float(a)
# d = float(b)
# print(c*d)

# print("6036번")
# a,b = input().split()
# print(a*int(b))

# print("6037번")
# a = int(input())
# b = input()
# print(a*b)

# print("6038번")
# a,b = input().split()
# print(int(a)**int(b))

# print("6039번")
# a,b = input().split()
# print(float(a)**float(b))

# print("6040번")
# a,b = input().split()
# print(int(a)//int(b))

# print("6041번")
# a,b = input().split()
# print(int(a)%int(b))


# print("6042번")
# a = float(input())
# print(round(a,2))
# print(format(a,".2f"))

# print("6043번")
# a,b = input().split()
# c=float(a)/float(b)
# print("%.3f"%c)

# print("6044번")
# a,b = input().split()
# c = float(a)/float(b)
# print(int(a)+int(b))
# print(int(a)-int(b))
# print(int(a)*int(b))
# print(int(a)//int(b))
# print(int(a)%int(b))
# print("%.2f" %c)

# print("6045번")
# a,b,c = input().split()
# d = int(a)+int(b)+int(c)
# print(d,format(d/3,".2f"))

# print("6046번")
# a = int(input())
# print(a*2)

# print("6047번")
# a,b = input().split()
# print(int(a)<<int(b))

# print("6048번")
# a,b = input().split()
# if int(a)<int(b):
#     print(True)
# else:
#     print(False)

# print("6049번")
# a,b = input().split()
# if int(a) == int(b):
#     print(True)
# else:
#     print(False)

# print("6050번")
# a,b = input().split()
# if int(b)>=int(a):
#     print(True)
# else:
#     print(False)

# print("6051번")
# a,b = input().split()
# if(int(a)!=int(b)):
#     print(True)
# else:
#     print(False)

# print("6052번")
# a = input()
# print(bool(int(a)))

# print("6053번")
# a = input()
# print(not bool(int(a)))


# print("6054번")
# a,b = input().split()
# print(bool(int(a)) and bool(int(b)))

# print("6055번")
# a,b = input().split()
# print(bool(int(a)) or bool(int(b)))

# print("6056번")
# a,b = input().split()
# if bool(int(a)) != bool(int(b)):
#     print(True)
# else:
#     print(False)

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