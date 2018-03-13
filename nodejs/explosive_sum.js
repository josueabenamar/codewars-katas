function sum(num)
{
	return partition(1, num);
}

var partition = function(k, n)
{
	return (k > n) ? 0 : (k == n) ? 1 : partition(k+1, n) + partition(k, n-k);
}

console.log(sum(-1),0);
console.log(sum(2),2);
console.log(sum(3),3);
console.log(sum(4),5);
console.log(sum(5),7);
console.log(sum(10),42);
console.log(sum(50),204226);
//console.log(sum(80),15796476);
//console.log(sum(100),190569292);
console.log(sum(10),42);
