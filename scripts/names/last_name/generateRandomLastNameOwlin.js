function generateRandomLastNameOwlin() {
	let lastName;
	const syllable1 =
		owlinLastNameSyllable1[Math.floor(Math.random() * owlinLastNameSyllable1.length)];
	const syllable2 =
		owlinLastNameSyllable2[Math.floor(Math.random() * owlinLastNameSyllable2.length)];

	lastName = syllable1 + syllable2;

	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
