function generateRandomFirstNameHumanNonBinaryScandinavian() {
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
		const syllable1 = humanFirstNameMaleScandinavianSyllable1.concat(humanFirstNameFemaleScandinavianSyllable1)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleScandinavianSyllable1.length + humanFirstNameFemaleScandinavianSyllable1.length)
			)
		];
		const syllable2 =
		humanFirstNameMaleScandinavianSyllable2.concat(humanFirstNameFemaleScandinavianSyllable2)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleScandinavianSyllable2.length + humanFirstNameFemaleScandinavianSyllable2.length)
			)
		];
		const syllable3 =
		humanFirstNameMaleScandinavianSyllable3.concat(humanFirstNameFemaleScandinavianSyllable3)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleScandinavianSyllable3.length + humanFirstNameFemaleScandinavianSyllable3.length)
			)
		];
		const syllable4 =
		humanFirstNameMaleScandinavianSyllable4.concat(humanFirstNameFemaleScandinavianSyllable4)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleScandinavianSyllable4.length + humanFirstNameFemaleScandinavianSyllable4.length)
			)
		];
		const syllable5 =
		humanFirstNameMaleScandinavianSyllable5.concat(humanFirstNameFemaleScandinavianSyllable5)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleScandinavianSyllable5.length + humanFirstNameFemaleScandinavianSyllable5.length)
			)
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

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}