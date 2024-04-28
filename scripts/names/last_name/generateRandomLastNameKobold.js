function generateRandomLastNameKobold() {
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
			koboldLastNameSyllable1[Math.floor(Math.random() * koboldLastNameSyllable1.length)];
		const syllable2 =
			koboldLastNameSyllable2[Math.floor(Math.random() * koboldLastNameSyllable2.length)];
		const syllable3 =
			koboldLastNameSyllable3[Math.floor(Math.random() * koboldLastNameSyllable3.length)];
		const syllable4 =
			koboldLastNameSyllable4[Math.floor(Math.random() * koboldLastNameSyllable4.length)];
		const syllable5 =
			koboldLastNameSyllable5[Math.floor(Math.random() * koboldLastNameSyllable5.length)];

		lastName = syllable1 + syllable2 ;

	// console.log(lastName)
	return lastName;
}
