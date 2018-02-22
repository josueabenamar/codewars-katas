function validBraces(braces)
{
	var stack = [];

	var limit = braces.length;
	for(var i = 0; i < limit; i++)
	{
		var brace = braces[i];

		if(brace == "{" | brace == "(" | brace == "[") stack.push(brace);
		if(brace == "}" | brace == ")" | brace == "]")
		{
			var item = stack.pop();
			if(brace == "}" && item != "{") return false;
			if(brace == ")" && item != "(") return false;
			if(brace == "]" && item != "[") return false;
		}
	}
	return stack.length == 0;
}

console.log(validBraces( "()" ), true);
console.log(validBraces( "[(])" ), false);
console.log(validBraces( "]()[" ));
console.log(validBraces( "((([(]))))" ));
console.log(validBraces( "[][]([])[][]" ));
console.log(validBraces( "" ));
