function stripUrlParams(url_origin, strip)
{
	var index_params = url_origin.indexOf("?");
	if(index_params < 0) return url_origin;
	if(!strip) strip = [];

	var url = url_origin.substring(0, index_params);
	var params = url_origin.substring(index_params+1).split("&");
	var final_params = [];

	var lim_params = params.length;
	for(var i = 0; i < lim_params; i++)
	{
		var param = params[i];
		var key = param.substring(0, param.indexOf("="));

		if(strip.indexOf(key) < 0)
		{
			final_params.push(param);
			strip.push(key);
		}
	}

	var url_params = ((final_params.length < 0) ? "" : "?" + final_params.join("&"));
	return url + url_params;
}


console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2'), '*   www.codewars.com?a=1&b=2');
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']), '*   www.codewars.com?a=1');
console.log(stripUrlParams('www.codewars.com', ['b']), '*   www.codewars.com');
console.log(stripUrlParams('www.codewars.com?hola=1&adios=2&hola=2', ['hola']), '*   www.codewars.com?adios=2');
