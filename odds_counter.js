function odds(array)
{
	for(i in array)
	{
		var n = array[i];
		var count = 0;

		for(j in array)
		{
			if(array[j] == n) count++;
		}

		if(count % 2 == 1) return n; 
	}
}

function odds_compare(array, n)
{
	console.log(odds(array) + ", " + n);
}

odds_compare([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
odds_compare([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
odds_compare([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
odds_compare([10], 10);
odds_compare([1,1,1,1,1,1,10,1,1,1,1], 10);
odds_compare([5,4,3,2,1,5,4,3,2,10,10], 1);

/*
function square(n)
{
	if(n < 0) return false;
	return Math.sqrt(n) % 1 == 0;
}

console.log(square(-1));
console.log(square(3));
console.log(square(4));
console.log(square(16));
console.log(square(25));
console.log(square(26));
*/
