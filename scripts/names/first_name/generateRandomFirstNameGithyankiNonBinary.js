function generateRandomFirstNameGithyankiNonBinary() {
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
		const syllable1 = githyankiFirstNameMaleSyllable1.concat(githyankiFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(githyankiFirstNameMaleSyllable1.length +
						githyankiFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = githyankiFirstNameMaleSyllable2.concat(githyankiFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(githyankiFirstNameMaleSyllable2.length +
						githyankiFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = githyankiFirstNameMaleSyllable3.concat(githyankiFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(githyankiFirstNameMaleSyllable3.length +
						githyankiFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = githyankiFirstNameMaleSyllable4.concat(githyankiFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(githyankiFirstNameMaleSyllable4.length +
						githyankiFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = githyankiFirstNameMaleSyllable5.concat(githyankiFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(githyankiFirstNameMaleSyllable5.length +
						githyankiFirstNameFemaleSyllable5.length)
			)
		];

		firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

		// Replace consecutive vowels with a single vowel and an apostrophe
		firstName = firstName.replace(/([aeiou])\1/g, '$1\'$1');

		// Remove apostrophe if the name ends with it
		if (firstName.endsWith('\'')) {
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
		firstName.length > 10 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}