import re
def increment_string(sentence):
	if(len(sentence) == 0): return "1"
	cons = re.findall("[^0-9]", sentence)
	if(len(cons)) == 0: n = 0
	else: n = sentence.rfind(cons[-1])+1
	if n == len(sentence):
		return sentence + "1"
	num = sentence[n:]
	l = len(num)
	num = str(int(num)+1)
	if len(num) < l:
		num = "0"*(l-len(num)) + num
	return sentence[0:n] + num

print(increment_string("foo"), "foo1")
print(increment_string("foobar23"), "foobar24")
print(increment_string("foo0042"), "foo0043")
print(increment_string("foo9"), "foo10")
print(increment_string("foo099"), "foo100")
print(increment_string(""), "1")
print(increment_string("123"), "124")
print(increment_string("~L^[7654%>900828802bcST'>?62952v}(8[N7}22414W7893342mhbSz+('93369UoM8704585A|~\R965524638()t0000000043592"), "")
