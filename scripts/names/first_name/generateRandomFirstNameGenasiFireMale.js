function generateRandomFirstNameGenasiFireMale() {
	let firstName;
	const randomIndex = Math.floor(Math.random() * genasiFireFirstName.length);
	const prefix = genasiFireFirstName[randomIndex].prefix;
	const suffix =
		genasiFirstNameSuffixMale[Math.floor(Math.random() * genasiFirstNameSuffixMale.length)];
	const name = genasiFireFirstName[randomIndex].name;

	firstName = prefix + suffix + ' "' + name + '"';
	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}