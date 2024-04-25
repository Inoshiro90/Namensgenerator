function generateRandomFirstNameGenasiEarthMale() {
	let firstName;
	const randomIndex = Math.floor(Math.random() * genasiEarthFirstName.length);
	const prefix = genasiEarthFirstName[randomIndex].prefix;
	const suffix =
		genasiFirstNameSuffixMale[Math.floor(Math.random() * genasiFirstNameSuffixMale.length)];
	const name = genasiEarthFirstName[randomIndex].name;

	firstName = prefix + suffix + ' "' + name + '"';
	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}