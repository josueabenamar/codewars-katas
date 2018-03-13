function humanReadable(seconds)
{
	var s = seconds % 60;
	var m = parseInt(seconds / 60) % 60;
	var h = parseInt(seconds / 3600);

	var time = (h>=10) ? ""+h : "0"+h;
	time += ":" + ((m>=10) ? ""+m : "0"+m);
	time += ":" + ((s>=10) ? ""+s : "0"+s);
	return time;
}

console.log(humanReadable(0) + "   00:00:00")
console.log(humanReadable(5) + "   00:00:05")
console.log(humanReadable(60) + "   00:01:00")
console.log(humanReadable(86399) + "   23:59:59")
console.log(humanReadable(359999) + "   99:59:59")
