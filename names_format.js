function list(names)
{
	var format = "";
	var num_names = names.length;
	for(var i = 0; i < num_names; i++)
	{
		var separator = (i > 0) ? ((i == (num_names - 1)) ? " & " : ", ") : "";
		format += separator + names[i].name;
	}
	return format;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
console.log(list([ {name: 'Bart'} ]));
console.log(list([]));
