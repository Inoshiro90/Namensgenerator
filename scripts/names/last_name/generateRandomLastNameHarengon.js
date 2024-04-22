function generateRandomLastNameHarengon() {
	let lastName;
	let part1, part2;
  
	do {
	  part1 = harengonLastNameSyllable1[Math.floor(Math.random() * harengonLastNameSyllable1.length)];
	  part2 = harengonLastNameSyllable2[Math.floor(Math.random() * harengonLastNameSyllable2.length)];
	} while (part1 === part2);

	lastName = part1 + part2;
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
