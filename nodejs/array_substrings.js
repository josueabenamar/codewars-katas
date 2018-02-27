function inArray(array1,array2)
{
	var result = [];
	for(i1 in array1)
	{
		for(i2 in array2)
		{
			var item = array1[i1];
			if(array2[i2].indexOf(item) >= 0 && result.indexOf(item) < 0)
				result.push(item);
		}
	}
	return result.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])

a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])
