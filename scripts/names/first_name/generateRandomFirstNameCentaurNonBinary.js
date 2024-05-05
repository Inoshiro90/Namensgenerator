function generateRandomFirstNameCentaurNonBinary() {
	let firstName;
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
		const syllable1 = centaurFirstNameMaleSyllable1.concat(centaurFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(centaurFirstNameMaleSyllable1.length + centaurFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = centaurFirstNameMaleSyllable2.concat(centaurFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(centaurFirstNameMaleSyllable2.length + centaurFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = centaurFirstNameMaleSyllable3.concat(centaurFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(centaurFirstNameMaleSyllable3.length + centaurFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = centaurFirstNameMaleSyllable4.concat(centaurFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(centaurFirstNameMaleSyllable4.length + centaurFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = centaurFirstNameMaleSyllable5.concat(centaurFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(centaurFirstNameMaleSyllable5.length + centaurFirstNameFemaleSyllable5.length)
			)
		];

		firstName = getRandomElement([
			// getRandomElement([syllable2, syllable4]),
			syllable1 + syllable4,
			syllable1 + syllable5,
			syllable3 + syllable2,
			syllable3 + syllable5,
			syllable1 + syllable3 + syllable5,
		]);

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

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}