def modulo(n1, n2):
	n2 = str(n2)
	mod = 0
	for i in range(0, len(n2)):
		mod = (mod * 10 + int(n2[i])) % n1
	return mod

def last_digit(n1, n2):
	if n2 == 0:
		return 1
	mod = modulo(4, n2)
	exp = 4 if mod == 0 else mod
	result = (int(str(n1)[-1]) ** exp) % 10
	return result

print(last_digit(4,1), 4)
print(last_digit(4,2), 6)
print(last_digit(9,7), 9)
print(last_digit(10,10**10), 0)
print(last_digit(2**200,2**300), 6)
print(last_digit(3715290469715693021198967285016729344580685479654510946723, 68819615221552997273737174557165657483427362207517952651), 7)
