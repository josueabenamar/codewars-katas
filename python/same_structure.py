def get_structure(value, array):
	if type(array) is list:
		for i in array:
			if type(i) is list:
				value += "0"
				value = get_structure(value, i)
			else:
				value += "1"
	else:
		value += "1"
	return value

def same_structure_as(original, other):
	return get_structure("", original) == get_structure("", other)

print(same_structure_as([1,[1,1]],[2,[2,2]]), True)
print(same_structure_as([1,[1,1]],[[2,2],2]), False)
