function generateRandomFirstNameOrcNonBinary() {
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
		const syllable1 = orcFirstNameMaleSyllable1.concat(orcFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(orcFirstNameMaleSyllable1.length + orcFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = orcFirstNameMaleSyllable2.concat(orcFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(orcFirstNameMaleSyllable2.length + orcFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = orcFirstNameMaleSyllable3.concat(orcFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(orcFirstNameMaleSyllable3.length + orcFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = orcFirstNameMaleSyllable4.concat(orcFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(orcFirstNameMaleSyllable4.length + orcFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = orcFirstNameMaleSyllable5.concat(orcFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(orcFirstNameMaleSyllable5.length + orcFirstNameFemaleSyllable5.length)
			)
		];

		const nickNameSyllable1 =
			orcNickNameSyllable1[Math.floor(Math.random() * orcNickNameSyllable1.length)];
		const nickNameSyllable2 =
			orcNickNameSyllable2[Math.floor(Math.random() * orcNickNameSyllable2.length)];

		firstName =
			syllable1 +
			syllable2 +
			syllable3 +
			syllable4 +
			syllable5 +
			' "' +
			nickNameSyllable1 +
			nickNameSyllable2 +
			'"';

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
		// firstName.length > 10 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
