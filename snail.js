snail = function(array)
{
	var nm = array.length
	if(nm > 0) m = array[0].length;
	var items = nm*m;
	var result = [];

	if(items > 0)
	{
		var i = 0, j = 0;
		var dir = 1, diff = 0;
		for(var n = 0; n < items; n++)
		{
			result.push(array[i][j]);

			if(dir == 1)
			{
				j++;
				if(j >= nm-1-diff) dir = 2;
			}
			else if(dir == 2)
			{
				i++;
				if(i >= nm-1-diff) dir = 3;
			}
			else if(dir == 3)
			{
				j--;
				if(j < 1 + diff)
				{
					dir = 4;
					diff++;
				}
			}
			else if(dir == 4)
			{
				i--;
				if(i < 1 + diff) dir = 1;
			}
		}
	}

	return result;
}

array1 =
[
	[1,2,3],
	[8,9,4],
	[7,6,5]
];
array1_result = [1,2,3,4,5,6,7,8,9]

array2 =
[
	[1,2,3,4],
	[2,3,4,5],
	[1,6,5,6],
	[0,9,8,7]
];
array2_result = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]

console.log(snail(array1), array1_result);
console.log(snail(array2), array2_result);
console.log(snail([[]]),[]);

/*
3x3
i0,j0
i0,j1
i0,j2
i1,j2
i2,j2
i2,j1
i2,j0
i1,j0
i1,j1
*/
