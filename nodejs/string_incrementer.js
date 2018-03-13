function incrementString(sentence)
{
	var len = sentence.length;
	if(len == 0) return "1";
	var n = sentence.match("[^0-9](?!.*[^0-9])");
	n = (n != null) ? n.index+1 : 0;
	if(n == len) return sentence + "1";
	var num = sentence.substring(n, len);
	var l = num.length;
	num = String(parseInt(num)+1);
	if(num.length < l)
		for(var i = 0; i < (l-num.length)+1; i++)
			num = "0" + num;
	return sentence.substring(0,n) + num;
}

console.log(incrementString("foo"), "foo1")
console.log(incrementString("foobar23"), "foobar24")
console.log(incrementString("foo001"), "foo002")
console.log(incrementString("foo0042"), "foo0043")
console.log(incrementString("foo9"), "foo10")
console.log(incrementString("foo099"), "foo100")
console.log(incrementString(""), "1")
console.log(incrementString("123"), "124")
console.log(incrementString("~L^[7654%>900828802bcST'>?62952v}(8[N7}22414W7893342mhbSz+('93369UoM8704585A|~\R965524638()t0000000043592"), "")
