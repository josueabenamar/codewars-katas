function duplicateEncode(word)
{
	var result = "";
	word = word.toLowerCase();

	for(c in word)
	{
		result += (word.split(word[c]).length == 2 ? "(" : ")");
	}
	return result;
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");
