def make_readable(seconds):
	s = seconds % 60
	m = (seconds / 60) % 60
	h = (seconds / 3600)

	time = str(h) if (h>=10) else "0"+str(h)
	time += ":" + (str(m) if (m>=10) else "0"+str(m))
	time += ":" + (str(s) if (s>=10) else "0"+str(s))
	return time

print(make_readable(0) + "   00:00:00")
print(make_readable(5) + "   00:00:05")
print(make_readable(60) + "   00:01:00")
print(make_readable(86399) + "   23:59:59")
print(make_readable(359999) + "   99:59:59")
