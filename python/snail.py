def snail(array):
	nm = len(array)
	if nm > 0: m = len(array[0])
	items = nm*m
	result = []

	if items > 0:
		i = 0
		j = 0
		dir = 1
		diff = 0

		for n in range(0,items):
			result.append(array[i][j])

			if dir == 1:
				j += 1
				if j >= nm-1-diff: dir = 2

			elif dir == 2:
				i += 1
				if i >= nm-1-diff: dir = 3

			elif dir == 3:
				j -= 1
				if j < 1+diff:
					dir = 4
					diff += 1

			elif dir == 4:
				i -= 1
				if i < 1+diff: dir = 1

	return result

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
expected = [1,2,3,6,9,8,7,4,5]

print(snail(array), expected)
