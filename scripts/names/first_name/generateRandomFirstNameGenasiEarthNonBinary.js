function generateRandomFirstNameGenasiEarthNonBinary() {
	let firstName;
	const randomIndex = Math.floor(Math.random() * genasiEarthFirstName.length);
	const prefix = genasiEarthFirstName[randomIndex].prefix;
	const suffix =
		genasiFirstNameSuffixNonBinary[
			Math.floor(Math.random() * genasiFirstNameSuffixNonBinary.length)
		];
	const name = genasiEarthFirstName[randomIndex].name;

	firstName = prefix + suffix + ' "' + name + '"';

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
