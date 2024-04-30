function generateRandomFirstNameThriKreen() {
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

	const syllable1 =
		thriKreenFirstNameSyllable1[Math.floor(Math.random() * thriKreenFirstNameSyllable1.length)];
	const syllable2 =
		thriKreenFirstNameSyllable2[Math.floor(Math.random() * thriKreenFirstNameSyllable2.length)];
	const syllable3 =
		thriKreenFirstNameSyllable3[Math.floor(Math.random() * thriKreenFirstNameSyllable3.length)];
	const syllable4 =
		thriKreenFirstNameSyllable4[Math.floor(Math.random() * thriKreenFirstNameSyllable4.length)];
	const syllable5 =
		thriKreenFirstNameSyllable5[Math.floor(Math.random() * thriKreenFirstNameSyllable5.length)];
	const specialCharacter1 = getRandomElement(["'", '-', '-', '-']);
	const specialCharacter2 = getRandomElement(["'", '-', '-', '-']);

	firstName = getRandomElement([
		syllable1,
		syllable1 + syllable2,
		syllable1 + specialCharacter1 + syllable2,
		syllable1 + specialCharacter1 + syllable2 + specialCharacter2 + syllable3,
		syllable1 + specialCharacter1 + syllable2 + syllable3,
		syllable1 + syllable2 + specialCharacter1 + syllable3,
		// syllable1 + syllable2 + syllable3,

		// syllable1 +
		// 	getRandomElement(specialCharacter) +
		// 	syllable2 +
		// 	getRandomElement(specialCharacter)
		// 	// syllable3 +
		// 	// getRandomElement(specialCharacter) +
		// 	// syllable4,
	]);

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
