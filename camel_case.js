function solution(string)
{
	var A = 65, Z = 90;
	for(var code = A; code <= Z; code++)
	{
		var char = String.fromCharCode(code);
		var exp = new RegExp(char, "g");
		string = string.replace(exp, " " + char);
	}
	return string;
}


console.log(solution("camelCasingCode"));
