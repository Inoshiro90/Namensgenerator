function generateRandomFirstNameVedalkenNonBinary() {
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
		const syllable1 = vedalkenFirstNameMaleSyllable1.concat(vedalkenFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(vedalkenFirstNameMaleSyllable1.length +
						vedalkenFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = vedalkenFirstNameMaleSyllable2.concat(vedalkenFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(vedalkenFirstNameMaleSyllable2.length +
						vedalkenFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = vedalkenFirstNameMaleSyllable3.concat(vedalkenFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(vedalkenFirstNameMaleSyllable3.length +
						vedalkenFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = vedalkenFirstNameMaleSyllable4.concat(vedalkenFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(vedalkenFirstNameMaleSyllable4.length +
						vedalkenFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = vedalkenFirstNameMaleSyllable5.concat(vedalkenFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(vedalkenFirstNameMaleSyllable5.length +
						vedalkenFirstNameFemaleSyllable5.length)
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

	// Define the list of letters that should not appear twice in a row
	const nonRepeatingLetters = ['j', 'v', 'w'];

	// Construct the regular expression dynamically to take into account the letters in the list
	const nonRepeatingRegex = new RegExp(
		`([^aeiou${nonRepeatingLetters.join('|')}])\\1{2,}|${nonRepeatingLetters.join('|')}{2}`,
		'gi'
	);

	// Reduce the consecutive consonants to two, except for the letters in the nonRepeatingLetters list
	firstName = firstName.replace(nonRepeatingRegex, '$1$1');

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
