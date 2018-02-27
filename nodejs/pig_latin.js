var exp = /^[a-z0-9]+$/i;
function pigIt(str)
{
	var words = str.split(" ");

	for(var i = 0; i < words.length; i++)
	{
		var word = words[i];
		if(word.match(exp))
			words[i] = (word + word.charAt(0) + "ay").substring(1);
	}
	return words.join(" ");
}

console.log(pigIt('Pig latin is cool'), "*", 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'), "*", 'hisTay siay ymay tringsay')
console.log(pigIt('Hello world !'), "*", 'elloHay orldWay !')
