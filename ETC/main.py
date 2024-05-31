def hanoi(num, fromm, to, other):  #원반 수, 출발지, 목적지, 나머지
    if num == 0:
        return
    hanoi(num - 1, fromm, other, to)  # 1번째 -> 받아온 원반 갯수보다 하나적은 원반들을 목적지가 아닌 곳으로 이동
    move.append([fromm, to])  # 2번째 -> 마지막 원반을 목적지로 이동
    hanoi(num - 1, other, to, fromm) #3번째 -> 다른 곳으로 옮겼던 원반들을 그 위에 얹는다.


n = int(input())
move = []

hanoi(n, 1, 3, 2) #하노이탑의 함수를 원반 갯수만큼 실행

print(len(move)) #움직이는 횟수 출력

for i in range(len(move)):
    print(move[i][0], move[i][1])