def maskify(cc):
	return "#"*(len(cc)-4) + cc[-4:]

print(maskify('1'))
print(maskify('SF$SDfgsd2eA'))
print(maskify('4556364607935616'))
