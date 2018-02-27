function nextBigger(n)
{
	if(n < 10) return -1;
	var digits = String(n).split("");

	var result = -1;
	var max = digits.length;

	for(var i = max-2; i >= 0; i--)
	{
		var pivot = digits[i];

		for(var j = max-1; j > i; j--)
		{
			var comp = digits[j];
			if(comp > pivot)
			{
				digits[j] = pivot;
				digits[i] = comp;
				var rest = digits.splice(i+1).sort();
				result = Number(digits.concat(rest).join(""));
				break;
			}
		}
		if(result > -1) break;
	}
	return result;
}

console.log(nextBigger(12),21)
console.log(nextBigger(513),531)
console.log(nextBigger(2017),2071)
console.log(nextBigger(414),441)
console.log(nextBigger(144),414)
console.log(nextBigger(9),-1)
console.log(nextBigger(111),-1)
console.log(nextBigger(531),-1)
console.log(nextBigger(1234567890),1234567908);
console.log(nextBigger(5664),6456);
console.log(nextBigger(58487),58748);
