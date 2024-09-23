def solution(numbers, target):
    def dfs(type, i, sum):
        print(str(type) + str(i) + " " + str(sum))
        if (i == len(numbers)): 
            return 1 if sum == target  else 0
        
        add = dfs("add", i + 1, sum + numbers[i])
        subtract = dfs("sub", i + 1, sum - numbers[i])
        
        return add + subtract
    return dfs("str", 0, 0)
    

print(solution([4, 1, 2, 1],4))
