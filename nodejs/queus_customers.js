function queueTime(customers, n)
{
	var queues = [];
	var tiempo = 0;

	var num_customers = customers.length;
	for(var c = 0; c < num_customers; )
	{
		while()
		//var item =
		//if(queues.length + 1 <= n)
		{
			console.log(customers.splice(0, 1));
			console.log(customers);
		}
		tiempo++;
		c++;
	}
	return tiempo;
}

console.log(queueTime([], 1), 0);
//console.log(queueTime([1,2,3,4], 1), 10);
console.log(queueTime([2,2,3,3,4,4], 2), 9);
//console.log(queueTime([1,2,3,4,5], 100), 5);
