function formatDuration(time)
{
	if(time < 0) return;
	if(time == 0) return "now";

	var date = "", counter = 0;

	function addDateFormat(factor_atu, factor_ntu, unit)
	{
		var timeunit = (time / factor_atu) % factor_ntu;

		var format = "";
		if(timeunit > 0)
		{
			format = timeunit + " " + unit;
			if(timeunit > 1) format += "s";

			date = (counter > 1) ? format + ", " + date : (counter > 0) ? format + " and " + date : format;
			counter++;
		}
		time -= timeunit * factor_atu;
	}

	addDateFormat(1, 60, "second");
	addDateFormat(60, 60, "minute");
	addDateFormat(3600, 24, "hour");
	addDateFormat(86400, 365, "day");
	addDateFormat(31536000, 31536000, "year");

	return date;
}


console.log(formatDuration(1), "* 1 second");
console.log(formatDuration(62), "* 1 minute and 2 seconds");
console.log(formatDuration(120), "* 2 minutes");
console.log(formatDuration(3600), "* 1 hour");
console.log(formatDuration(3662), "* 1 hour, 1 minute and 2 seconds");
console.log(formatDuration(259261));
console.log(formatDuration(3425687));
console.log(formatDuration(31536001));
console.log(formatDuration(126200000));
