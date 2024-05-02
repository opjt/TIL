def dfs(start):
    visited[start] = 1
    for num in list[start]:
        if visited[num] != 1:
            dfs(num)

n = int(input()) # 컴퓨터 수
m = int(input()) # 연결 수

list = [[] for i in range (n+1)]
visited = [0] * (n+1)
for i in range(m):
    a,b = map(int, input().split())
    list[a].append(b)
    list[b].append(a)

dfs(1)
print(visited.count(1)-1)