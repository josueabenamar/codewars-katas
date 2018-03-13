def next_bigger(n):
	if(n < 10): return -1
	digits = list(str(n))

	result = -1
	max = len(digits)

	i = max-2
	while i >= 0:
		pivot = digits[i]

		j = max-1
		while j > i:
			comp = digits[j]

			if(comp > pivot):
				digits[j] = pivot
				digits[i] = comp
				rest = digits[i+1:]
				rest.sort()
				digits = digits[0:i+1]
				result = int("".join(digits + rest))
				break

			j -= 1

		if result > -1: break
		i -= 1

	return result

print(next_bigger(12),21)
print(next_bigger(513),531)
print(next_bigger(2017),2071)
print(next_bigger(414),441)
print(next_bigger(144),414)
print(next_bigger(9),-1)
print(next_bigger(111),-1)
print(next_bigger(531),-1)
print(next_bigger(1234567890),1234567908);
print(next_bigger(5664),6456);
print(next_bigger(58487),58748);
