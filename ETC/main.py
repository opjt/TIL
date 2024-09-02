def mini(array, i, j, k):
    newarray = array[i-1:j]  # 인덱스 슬라이싱 수정 (j번째는 포함해야 하므로 j-1 대신 j)
    return sorted(newarray)[k-1]  # 슬라이싱한 배열을 정렬 후 k번째 값 반환

def solution(numbers, command):
    result = []
    for cmd in command:
        i, j, k = cmd
        result.append(mini(numbers, i, j, k))
    return(result)


