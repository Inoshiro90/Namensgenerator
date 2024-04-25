function generateRandomFirstNameGenasiFireNonBinary() {
	let firstName;
	const randomIndex = Math.floor(Math.random() * genasiFireFirstName.length);
	const prefix = genasiFireFirstName[randomIndex].prefix;
	const suffix =
		genasiFirstNameSuffixNonBinary[
			Math.floor(Math.random() * genasiFirstNameSuffixNonBinary.length)
		];
	const name = genasiFireFirstName[randomIndex].name;

	firstName = prefix + suffix + ' "' + name + '"';

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
