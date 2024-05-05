function generateRandomFirstNameAutognomeFemale() {
	let firstName;
	let nickName;
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
			gnomeFirstNameFemaleSyllable1[
				Math.floor(Math.random() * gnomeFirstNameFemaleSyllable1.length)
			];
		const syllable2 =
			gnomeFirstNameFemaleSyllable2[
				Math.floor(Math.random() * gnomeFirstNameFemaleSyllable2.length)
			];
		const syllable3 =
			gnomeFirstNameFemaleSyllable3[
				Math.floor(Math.random() * gnomeFirstNameFemaleSyllable3.length)
			];
		const syllable4 =
			gnomeFirstNameFemaleSyllable4[
				Math.floor(Math.random() * gnomeFirstNameFemaleSyllable4.length)
			];
		const syllable5 =
			gnomeFirstNameFemaleSyllable5[
				Math.floor(Math.random() * gnomeFirstNameFemaleSyllable5.length)
			];

		firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

		// Check for consecutive vowels
		const currentVowel = firstName.match(/[aeiou]/gi);
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
					combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{3,}/gi)
				);
			}
			return false;
		});

		// Check for x, z, q consecutive
		consecutiveXZQ = firstName.match(/xz|xq|zx|zq|qz/gi);
	} while (
		consecutiveVowels > 1 ||
		firstName.match(/[aeiou]{4,}/gi) ||
		firstName.length < 3 ||
		firstName.length > 10 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	nickName = convertToLeet(firstName);

	return (
		firstName.charAt(0).toUpperCase() +
		firstName.slice(1) +
		' "' +
		nickName +
		'-' +
		getRandomElement(professionMale) +
		'"'
	);
}
