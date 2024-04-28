function generateRandomLastNameKender() {
	let lastName;
	let part1, part2;
  
	do {
	  part1 = kenderLastNamePart1[Math.floor(Math.random() * kenderLastNamePart1.length)];
	  part2 = kenderLastNamePart2[Math.floor(Math.random() * kenderLastNamePart2.length)];
	} while (part1 === part2);

	lastName = part1 + part2;
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
