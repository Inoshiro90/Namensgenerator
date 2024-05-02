function generateRandomLastNameChangeling() {
	let lastName;
	const syllable1 =
		changelingLastNameSyllable1[Math.floor(Math.random() * changelingLastNameSyllable1.length)];
	const syllable2 =
		changelingLastNameSyllable2[Math.floor(Math.random() * changelingLastNameSyllable2.length)];

	lastName = syllable1 + syllable2;

	// console.log(lastName)
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
