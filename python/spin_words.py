def spin_words(sentence):
	words = sentence.split(" ")
	for i in range(0, len(words)):
		if len(words[i]) >= 5:
			words[i] = words[i][::-1]
	return " ".join(words)

print(spin_words("Welcome"));
print(spin_words("Hey fellow warriors"));
print(spin_words("This is a test"));
print(spin_words("This is another test"));
