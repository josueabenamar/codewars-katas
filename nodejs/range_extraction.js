function solution(list)
{
	var final_list = [], stack = [];

	function addItems()
	{
		if(stack.length == 1) final_list.push(stack.pop());
		else if(stack.length == 2)
		{
			final_list.push(stack[0]);
			final_list.push(stack[1]);
			stack = [];
		}
		else
		{
			final_list.push(stack[0]+"-"+last);
			stack = [];
		}
	}

	var lim = list.length+1;
	for(var i = 0; i < lim; i++)
	{
		var item = list[i];

		if(stack.length == 0) stack.push(item);
		else
		{
			var last = stack[stack.length-1];
			if(item != last+1) addItems();
			stack.push(item);
		}
	}

	return final_list.join();
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "***", "-6,-3-1,3-5,7-11,14,15,17-20")
