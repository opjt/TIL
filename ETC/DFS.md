---
title: DFS(Depth First Search)
---

# DFS(Depth First Search)
DFS는 깊이 우선 탐색으로 그래프에서 깊은 부분을 우선으로 탐색하는 알고리즘이다

## 탐색 과정
1. 시작 노드를 스택에 삽입 후 방문 처리 한다
2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 노드를 스택에 넣고 방문처리를 한다
3. 위 과정을 더이상 수행할 수 없을 때까지 반복한다

## 파이썬 예제코드
```python
def dfs(graph, start, visited):
    # 현재 노드를 방문 처리하고 출력
    visited[start] = True
    print(start, end=' ')

    # 현재 노드와 연결된 다른 노드들을 재귀적으로 방문
    for neighbor in graph[start]:
        if not visited[neighbor]:
            dfs(graph, neighbor, visited)

def main():
    # 그래프를 인접 리스트로 표현
    graph = [
        [],
        [2, 3, 4],   # 1번 노드와 연결된 노드들
        [5],         # 2번 노드와 연결된 노드들
        [6, 7],      # 3번 노드와 연결된 노드들
        [],
        [],
        [],
        [8],         # 7번 노드와 연결된 노드들
        []
    ]

    # 각 노드의 방문 여부를 나타내는 리스트
    visited = [False] * len(graph)

    # DFS 시작
    dfs(graph, 1, visited)

if __name__ == "__main__":
    main()

```