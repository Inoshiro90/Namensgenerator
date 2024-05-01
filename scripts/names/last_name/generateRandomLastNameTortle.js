function generateRandomLastNameTortle() {
	let lastName;
	const syllable1 =
		tortleLastNameSyllable1[Math.floor(Math.random() * tortleLastNameSyllable1.length)];
	const syllable2 =
		tortleLastNameSyllable2[Math.floor(Math.random() * tortleLastNameSyllable2.length)];

	lastName = syllable1 + syllable2;

	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
