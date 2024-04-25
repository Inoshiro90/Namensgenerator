function generateRandomFirstNameGenasiAirNonBinary() {
	let firstName;
	const randomIndex = Math.floor(Math.random() * genasiAirFirstName.length);
	const prefix = genasiAirFirstName[randomIndex].prefix;
	const suffix =
		genasiFirstNameSuffixNonBinary[
			Math.floor(Math.random() * genasiFirstNameSuffixNonBinary.length)
		];
	const name = genasiAirFirstName[randomIndex].name;

	firstName = prefix + suffix + ' "' + name + '"';

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
