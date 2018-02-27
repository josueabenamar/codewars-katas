var breakChocolate = function(n, m)
{
	if(n+m <= 3) return 0;
	return n*m - 1;
}

console.log(breakChocolate(5,5));
console.log(breakChocolate(1,1));
