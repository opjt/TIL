def solution(list):
    answer = []
    for idx,val in enumerate(list):
        if(answer[-1:] != [val]):
            answer.append(val)

    return answer
    

print(solution([1,1,3,3,0,1,1]))
