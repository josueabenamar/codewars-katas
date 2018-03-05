def digital_root(n):
	digits = str(n)
	if len(digits) == 1:
		return int(digits)

	sum = 0
	for d in digits:
		sum += int(d)

	return digital_root(sum)

print(digital_root(9))
print(digital_root(16))
print(digital_root(189))
