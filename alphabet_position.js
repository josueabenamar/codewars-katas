function alphabetPosition(text)
{
	var result = "";

	var l = text.length;
	for(i = 0; i < l; i++)
	{
		var c = text.charCodeAt(i);
		if(c >= 65 && c <= 90) result += (c - 64) + " ";
		else if(c >= 97 && c <= 122) result += (c - 96) + " ";
	}

	return result.trim();
}

console.log(alphabetPosition("ABCXYZ"));
console.log(alphabetPosition("abcxyz"));

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

console.log(alphabetPosition("The narwhal bacons at midnight."));
console.log("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
