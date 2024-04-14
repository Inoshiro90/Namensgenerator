function generateRandomLastNameKalashtar(firstName) {
	let lastName;
	let previousVowel = '';
	let consecutiveVowels = 0;
	let consecutiveConsonants;
	let consecutiveXZQ;

	function isDigraph(string) {
		return [
			'ch',
			'chs',
			'ck',
			'dh',
			'dsch',
			'dt',
			'gh',
			'ng',
			'ph',
			'sch',
			'sp',
			'ss',
			'st',
			'sz',
			'th',
			'tz',
			'tzsch',
			'zsch',
		].includes(string);
	}

	do {
		const syllable1 =
			kalashtarFirstNameSyllable1[
				Math.floor(Math.random() * kalashtarFirstNameSyllable1.length)
			];
		const syllable2 =
			kalashtarFirstNameSyllable2[
				Math.floor(Math.random() * kalashtarFirstNameSyllable2.length)
			];
		const syllable3 =
			kalashtarFirstNameSyllable1[
				Math.floor(Math.random() * kalashtarFirstNameSyllable1.length)
			];
		const syllable4 =
			kalashtarFirstNameSyllable2[
				Math.floor(Math.random() * kalashtarFirstNameSyllable2.length)
			];
		const syllable5 =
			kalashtarLastNameSyllable5[
				Math.floor(Math.random() * kalashtarLastNameSyllable5.length)
			];

		// Check if the spirit name is part of the first name
		const quoriName = kalashtarFirstNameSyllable4.find((name) =>
			firstName.toLowerCase().includes(name.toLowerCase())
		);

		lastName = syllable1 + syllable2 + "'" + syllable3 + syllable4 + "'" + quoriName;

		// Check for consecutive vowels
		const currentVowel = lastName.match(/[aeiou]/gi);
		if (currentVowel && currentVowel[0] === previousVowel) {
			consecutiveVowels++;
		} else {
			consecutiveVowels = 0;
		}

		// Check for consecutive consonants, considering digraphs
		const syllablesArray = [syllable1, syllable2, syllable3, syllable4, syllable5];
		consecutiveConsonants = syllablesArray.some((syllable, index) => {
			if (index < syllablesArray.length - 1) {
				const combinedSyllables = syllable + syllablesArray[index + 1];
				return (
					!isDigraph(combinedSyllables) &&
					combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{4,}/gi)
				);
			}
			return false;
		});

		// Check for x, z, q consecutive
		consecutiveXZQ = lastName.match(/xz|xq|zx|zq|qz/gi);
	} while (
		consecutiveVowels > 1 ||
		lastName.match(/[aeiou]{4,}/gi) ||
		lastName.length < 3 ||
		lastName.length > 20 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);
	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
