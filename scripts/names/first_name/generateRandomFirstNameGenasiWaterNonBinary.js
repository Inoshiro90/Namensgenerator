function generateRandomFirstNameGenasiWaterNonBinary() {
	let firstName;
	const randomIndex = Math.floor(Math.random() * genasiWaterFirstName.length);
	const prefix = genasiWaterFirstName[randomIndex].prefix;
	const suffix =
		genasiFirstNameSuffixNonBinary[
			Math.floor(Math.random() * genasiFirstNameSuffixNonBinary.length)
		];
	const name = genasiWaterFirstName[randomIndex].name;

	firstName = prefix + suffix + ' "' + name + '"';

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
