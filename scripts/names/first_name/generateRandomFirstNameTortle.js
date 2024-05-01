function generateRandomFirstNameTortle() {
	let firstName;
	const syllable1 =
		tortleFirstNameSyllable1[Math.floor(Math.random() * tortleFirstNameSyllable1.length)];
	const syllable2 =
		tortleFirstNameSyllable2[Math.floor(Math.random() * tortleFirstNameSyllable2.length)];
	const syllable3 =
		tortleFirstNameSyllable3[Math.floor(Math.random() * tortleFirstNameSyllable3.length)];

	firstName = getRandomElement([
		getRandomElement([syllable1, syllable2, syllable3]),
		syllable2 + syllable3,
	]);

	// console.log(lastName)
	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
