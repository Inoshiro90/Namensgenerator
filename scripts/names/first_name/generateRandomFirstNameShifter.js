function generateRandomFirstNameShifter() {
	const firstName = shifterFirstNames[Math.floor(Math.random() * shifterFirstNames.length)];

	return firstName;
}
