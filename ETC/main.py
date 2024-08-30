def solution(numbers):
	dict = {}
	for i in numbers:
		dict[i] = True
	if(len(numbers)/2 < len(dict)):
		return int(len(numbers)/2)
	return len(dict)
		

print(solution([3,3,3,2,2,2]))