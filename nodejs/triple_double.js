function tripledouble(num1, num2)
{
	num1 = String(num1);
	num2 = String(num2);
	for(var i = 0; i < 10; i++)
		if(num1.lastIndexOf(i+""+i+""+i) >= 0)
			if(num2.lastIndexOf(i+""+i) >= 0)
				return 1;
	return 0;
}

console.log(triple_double(451999277, 41177722899), 1)
console.log(triple_double(1222345, 12345), 0)
console.log(triple_double(12345, 12345), 0)
console.log(triple_double(666789, 12345667), 1)
console.log(triple_double(10560002, 100), 1)
