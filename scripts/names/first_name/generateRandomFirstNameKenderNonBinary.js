function generateRandomFirstNameKenderNonBinary() {
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
		const syllable1 = kenderFirstNameMaleSyllable1.concat(kenderFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(kenderFirstNameMaleSyllable1.length + kenderFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = kenderFirstNameMaleSyllable2.concat(kenderFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(kenderFirstNameMaleSyllable2.length + kenderFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = kenderFirstNameMaleSyllable3.concat(kenderFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(kenderFirstNameMaleSyllable3.length + kenderFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = kenderFirstNameMaleSyllable4.concat(kenderFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(kenderFirstNameMaleSyllable4.length + kenderFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = kenderFirstNameMaleSyllable5.concat(kenderFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(kenderFirstNameMaleSyllable5.length + kenderFirstNameFemaleSyllable5.length)
			)
		];

		const randomNumber = Math.random();
		// In 75% of cases: 2 syllables
		if (randomNumber < 0.75) {
			// getRandomElement([
			firstName = syllable1 + syllable2;
			// (firstName = syllable1 + syllable3),
			// ]);
			// In 25% of cases: 3 syllables
		} else {
			firstName = syllable1 + syllable2 + syllable3;
		}

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
