N = int(input())

meetings = []

for _ in range(N):
    start, end = map(int, input().split())
    meetings.append((start, end))

meetings.sort(key=lambda x: (x[1], x[0]))

count = 0
last_end_time = 0

for x, y in meetings:
    print(str(x) + " " + str(y))

for start, end in meetings:
    if start >= last_end_time:
        count += 1
        last_end_time = end

print(count)

# for i in range(len(lng)):
#     print(lng[i])


# (3,5) (1,2) (4,7) (5,8)


# count, num1 = map(int, input().split())
# numbers = []

# for i in range(count):
#    numbers.append(int(input()))

# # print("max : " + str(max))

# totalCount = 0
# for i in reversed(range(count)):
#     totalCount += num1//numbers[i]
#     num1 = num1 % numbers[i]
# print(totalCount)