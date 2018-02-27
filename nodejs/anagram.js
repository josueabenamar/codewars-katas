function anagrams(word, words)
{
	var found = [];

	word = word.split('').sort().join('');

	var num_words = words.length;
	for(var i = 0; i < num_words; i++)
	{
		var anagram = words[i];
		if(anagram.split('').sort().join('') === word)
			found.push(anagram);
	}
	return found;
}

//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
//anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
//anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));


//assert(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
//assert(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
//assert(anagrams('caso', ['saco', 'cosa', 'casa', 'cazo']), ['saco', 'caso']);
