function generateRandomFirstNameGoblinoidNonBinary() {
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
		const syllable1 = goblinoidFirstNameMaleSyllable1.concat(goblinoidFirstNameFemaleSyllable1)[
			Math.floor(
				Math.random() *
					(goblinoidFirstNameMaleSyllable1.length +
						goblinoidFirstNameFemaleSyllable1.length)
			)
		];
		const syllable2 = goblinoidFirstNameMaleSyllable2.concat(goblinoidFirstNameFemaleSyllable2)[
			Math.floor(
				Math.random() *
					(goblinoidFirstNameMaleSyllable2.length +
						goblinoidFirstNameFemaleSyllable2.length)
			)
		];
		const syllable3 = goblinoidFirstNameMaleSyllable3.concat(goblinoidFirstNameFemaleSyllable3)[
			Math.floor(
				Math.random() *
					(goblinoidFirstNameMaleSyllable3.length +
						goblinoidFirstNameFemaleSyllable3.length)
			)
		];
		const syllable4 = goblinoidFirstNameMaleSyllable4.concat(goblinoidFirstNameFemaleSyllable4)[
			Math.floor(
				Math.random() *
					(goblinoidFirstNameMaleSyllable4.length +
						goblinoidFirstNameFemaleSyllable4.length)
			)
		];
		const syllable5 = goblinoidFirstNameMaleSyllable5.concat(goblinoidFirstNameFemaleSyllable5)[
			Math.floor(
				Math.random() *
					(goblinoidFirstNameMaleSyllable5.length +
						goblinoidFirstNameFemaleSyllable5.length)
			)
		];
		const nickNameSyllable1 =
			goblinoidNickNameSyllable1[
				Math.floor(Math.random() * goblinoidNickNameSyllable1.length)
			];
		const nickNameSyllable2 =
			goblinoidNickNameSyllable2[
				Math.floor(Math.random() * goblinoidNickNameSyllable2.length)
			];

		firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

		nickName = nickNameSyllable1 + nickNameSyllable2;

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

	return firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' "' + nickName + '"';
}