var nbrOfLaps = function(x, y)
{
	var factor = mcd(x,y);
	return [y/factor,x/factor];
}

var mcd = function(x, y)
{
	if(!y) return x;
	return mcd(y, x%y);
}

console.log(nbrOfLaps(5, 3), "3,5");
console.log(nbrOfLaps(4, 6), "3,2");
console.log(nbrOfLaps(5, 5), "1,1");
