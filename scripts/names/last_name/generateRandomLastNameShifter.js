function generateRandomLastNameShifter() {
	let lastName;
	const syllable1 =
		shifterLastNameSyllable1[Math.floor(Math.random() * shifterLastNameSyllable1.length)];
	const syllable2 =
		shifterLastNameSyllable2[Math.floor(Math.random() * shifterLastNameSyllable2.length)];

	lastName = syllable1 + syllable2;

	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
