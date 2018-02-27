var spiralize = function(size)
{
	if(size < 5) return;

	var result = [], i, j;

	for(i = 0; i < size; i++)
	{
		result[i] = [];
		for(j = 0; j < size; j++)
			result[i][j] = 0;
	}

	var i = 0, j = 0, dir = 1, diff=1;
	var lim = size + (size-1)%2;
	for(var p = size-1; p > 1; p-=2) lim += p*2;

	for(var n = 0; n < lim; n++)
	{
		result[i][j] = 1;

		if(dir == 1)
		{
			j++;
			if(j > size-1-diff) dir = 2;
		}
		else if(dir == 2)
		{
			i++;
			if(i > size-1-diff) dir = 3;
		}
		else if(dir == 3)
		{
			j--;
			if(j < 0 + diff)
			{
				diff += 2;
				dir = 4;
			}
		}
		else if(dir == 4)
		{
			i--;
			if(i < 0 + diff) dir = 1;
		}
	}

	return result;
}



/*
3 7
4 11 +4
5 17 +6
6 23 +6
7 31 +8
8 39 +8
9 49 +10
10 59 +10
11 71 +12
*/

console.log(spiralize(5));
/*
00000
....0
000.0
0...0
00000
5+4+4+2+2=17
*/

//console.log(spiralize(6));
/*
000000
.....0
0000.0
0..0.0
0....0
000000
6+5+5+3+3+1=23
*/

//console.log(spiralize(7));
/*
0000000
......0
00000.0
0...0.0
0.000.0
0.....0
0000000
7+6+6+4+4+2+2=31
*/

//console.log(spiralize(8));
/*
00000000
.......0
000000.0
0....0.0
0.0..0.0
0.0000.0
0......0
00000000
8+7+7+5+5+3+3+1=39
*/

console.log(spiralize(10));
/*
0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
10+9+9+7+7+5+3+3+1=59
*/
