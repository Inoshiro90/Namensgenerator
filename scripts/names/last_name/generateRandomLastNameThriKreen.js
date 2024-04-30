function generateRandomLastNameThriKreen() {
	let lastName;
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
		thriKreenLastNameSyllable2[Math.floor(Math.random() * thriKreenLastNameSyllable2.length)];

	const specialCharacter1 = getRandomElement(["'", '-', '-', '-']);
	const randomNumber = Math.random();

	// lastName = getRandomElement([
	// 	// getRandomElement([syllable1 + syllable4, syllable2 + syllable4, syllable3 + syllable4]),

	// In 75% of cases
	// if (randomNumber < 0.9) {
	// 	// getRandomElement([
	lastName = getRandomElement([
		syllable1 + syllable2 + syllable4,
		syllable1 + syllable3 + syllable4,

		syllable2 + syllable1 + syllable4,
		syllable2 + syllable3 + syllable4,

		syllable3 + syllable1 + syllable4,
		syllable3 + syllable2 + syllable4,
	]);
	// 	// In 25% of cases
	// } else {
	// 	lastName = getRandomElement([
	// 		syllable1 + syllable1 + syllable4,
	// 		syllable2 + syllable2 + syllable4,
	// 		syllable3 + syllable3 + syllable4,
	// 	]);
	// }
	// syllable1 + specialCharacter1 + syllable2 + syllable3,
	// ]);
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
