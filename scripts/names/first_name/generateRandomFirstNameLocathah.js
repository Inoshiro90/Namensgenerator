function generateRandomFirstNameLocathah() {
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
		locathahFirstNameSyllable1[Math.floor(Math.random() * locathahFirstNameSyllable1.length)];
	const syllable2 =
		locathahFirstNameSyllable2[Math.floor(Math.random() * locathahFirstNameSyllable2.length)];
	const syllable3 =
		locathahFirstNameSyllable3[Math.floor(Math.random() * locathahFirstNameSyllable3.length)];
	const syllable4 =
		locathahFirstNameSyllable4[Math.floor(Math.random() * locathahFirstNameSyllable4.length)];
	const syllable5 =
		locathahFirstNameSyllable5[Math.floor(Math.random() * locathahFirstNameSyllable5.length)];

	firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
