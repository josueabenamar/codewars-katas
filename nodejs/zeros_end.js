var moveZeros = function(items)
{
	var num = items.length;
	var zeros = 0;
	for(var i = 0; i < (num-zeros); )
	{
		if(items[i] === 0)
		{
			items.splice(i, 1);
			zeros ++;
		}
		else i++;
	}
	for(var i = 0; i < zeros; i++) items.push(0);
	
	return items;
}

console.log(moveZeros([false,1,0,0,1,2,0,1,3,"a"]));
console.log([false,1,1,2,1,3,"a",0,0,0]);
