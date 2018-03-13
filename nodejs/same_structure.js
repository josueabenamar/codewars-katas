function get_structure(value, array)
{
	if(typeof array == "object")
	{
		for(var i = 0; i < array.length; i++)
		{
			if(typeof array[i] == "object")
			{
				value += "0";
				value = get_structure(value, array[i]);
			}
			else value += "1";
		}
	}
	else value += "1";

	return value;
}

function same_structure_as(original, other)
{
	return get_structure("", original) == get_structure("", other);
}

console.log(same_structure_as([1,[1,1]],[2,[2,2]]), true)
console.log(same_structure_as([1,[1,1]],[[2,2],2]), false)
