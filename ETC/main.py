count, num1 = map(int, input().split())
numbers = []

for i in range(count):
   numbers.append(int(input()))

# print("max : " + str(max))

totalCount = 0
for i in reversed(range(count)):
    totalCount += num1//numbers[i]
    num1 = num1 % numbers[i]
print(totalCount)