function generateRandomLastNameCentaur() {
	let lastName;
	const syllable1 =
		centaurLastNameSyllable1[Math.floor(Math.random() * centaurLastNameSyllable1.length)];
	const syllable2 =
		centaurLastNameSyllable2[Math.floor(Math.random() * centaurLastNameSyllable2.length)];

	lastName = syllable1 + syllable2;

	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
