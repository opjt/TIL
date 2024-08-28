def solution(X, Y):
    answer = []
    for i in (set(X) & set(Y)):
        for j in  range(min(X.count(i), Y.count(i))):
            answer.append(i)
    answer.sort(reverse=True)
    if len(answer) == 0:
        return '-1'
    if answer[0] == '0':
        return '0'
    return ''.join(answer)




    
print(solution("100","203045"))


# def solution(X, Y):
#     answer = ""
#     listY = list(Y)
#     for i, val in enumerate(X):
#         if val in listY:
#             position = listY.index(val)
#             if(position != -1):
#                 if(answer == ""):
#                     answer = listY[position]
#                 elif(answer[0] == "0" and listY[position] == "0"):
#                     answer = "0"
#                 elif(answer[0] <= listY[position]):
#                     answer = listY[position]+answer
#                 elif(answer[0] > listY[position]):
#                     answer = answer + listY[position]
               
#                 listY[position] = "."
#     if(answer == ""):
#         return "-1"
#     return answer