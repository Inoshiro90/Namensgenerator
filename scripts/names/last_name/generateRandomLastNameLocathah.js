function generateRandomLastNameLocathah() {
	let lastName;

	const syllable1 =
		locathahLastNameSyllable1[Math.floor(Math.random() * locathahLastNameSyllable1.length)];
	const syllable2 =
		locathahLastNameSyllable2[Math.floor(Math.random() * locathahLastNameSyllable2.length)];
	lastName = syllable1 + syllable2;

	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
