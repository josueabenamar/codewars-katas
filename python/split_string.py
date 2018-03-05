def solution(string):
	result = []
	pair = ""
	for c in range(0, len(string)):
		pair += string[c]
		if c % 2 == 1:
			result.append(pair)
			pair = ""

	if len(pair) > 0:
		result.append(pair + "_")

	return result

print(solution("asdfadsf"))
print(solution("asdfads"))
