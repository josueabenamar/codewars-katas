function calc(expr)
{
	if(expr.length == 0) return 0;

	var items = expr.split(" ");
	var operators = ["+", "-", "*", "/"];
	var stack = [];

	var num_items = items.length;
	for(var i = 0; i < num_items; i++)
	{
		var item = items[i];
		if(operators.indexOf(item) < 0) stack.push(Number(item));
		else
		{
			var b = stack.pop();
			var a = stack.pop();
			stack.push((item == "+") ? (a+b) : (item == "-") ? (a-b) : (item == "*") ? (a*b) : (item == "/") ? (a/b) : 0);
		}
	}

	return stack.pop();
}

console.log(calc(""), 0);
console.log(calc("1 2 3"), 3);
console.log(calc("1 2 3.5"), 3.5);
console.log(calc("1 3 +"), 4);
console.log(calc("1 3 *"), 3);
console.log(calc("1 3 -"), -2);
console.log(calc("4 2 /"), 2);
