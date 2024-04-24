function generateRandomLastNameFairy() {
	let lastName;
	let part1, part2;

	do {
		part1 = fairyLastNameSyllable1[Math.floor(Math.random() * fairyLastNameSyllable1.length)];
		part2 = fairyLastNameSyllable2[Math.floor(Math.random() * fairyLastNameSyllable2.length)];
	} while (part1 === part2);

	lastName = part1 + part2;
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
