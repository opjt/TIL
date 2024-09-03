def solution(scoville, K):
    answer =0
    sortt = sorted(scoville)
    for i in range(len(sortt)):
        if(sortt[0] < K) :
            if(len(sortt) == 1 ):
                return -1
            answer += 1
            sortt[1] = sortt[0] + sortt[1] * 2
        else:
            return answer
    return answer

print(solution([1, 2, 3, 9, 10, 12],7))


