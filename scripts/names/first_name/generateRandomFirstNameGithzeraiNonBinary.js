function generateRandomFirstNameGithzeraiNonBinary() {
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
		const syllable1 = githzeraiFirstNameMaleSyllable1.concat(githzeraiFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(githzeraiFirstNameMaleSyllable1.length +
						githzeraiFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = githzeraiFirstNameMaleSyllable2.concat(githzeraiFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(githzeraiFirstNameMaleSyllable2.length +
						githzeraiFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = githzeraiFirstNameMaleSyllable3.concat(githzeraiFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(githzeraiFirstNameMaleSyllable3.length +
						githzeraiFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = githzeraiFirstNameMaleSyllable4.concat(githzeraiFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(githzeraiFirstNameMaleSyllable4.length +
						githzeraiFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = githzeraiFirstNameMaleSyllable5.concat(githzeraiFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(githzeraiFirstNameMaleSyllable5.length +
						githzeraiFirstNameFemaleSyllable5.length)
			)
		];

		firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

		// Replace consecutive vowels with a single vowel and an apostrophe
		firstName = firstName.replace(/([aeiou])\1/g, "$1'$1");

		// Remove apostrophe if the name ends with it
		if (firstName.endsWith("'")) {
			firstName = firstName.slice(0, -1);
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
		//firstName.length > 7 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
