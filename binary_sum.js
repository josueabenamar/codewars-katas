function addBinary(a,b)
{
	var num = a+b;
	var bin = "";

	while(num > 0)
	{
		bin = (num % 2) + bin;
		num = (num - (num % 2)) / 2;
	}
	return bin;
}

console.log(addBinary(1,2));
console.log(addBinary(15,2));
console.log(addBinary(51,12));
console.log(addBinary(51,12));
