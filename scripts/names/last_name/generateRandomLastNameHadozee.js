function generateRandomLastNameHadozee(gender) {
	let lastName;
	let part1, part2;
	let offspring;

	if (gender === 'männlich') {
		offspring = 'sohn';
	} else if (gender === 'weiblich') {
		offspring = 'tochter';
	} else if (gender === 'nicht-binär') {
		offspring = 'kind';
	}

	do {
		part1 = hadozeeLastNamePart1[Math.floor(Math.random() * hadozeeLastNamePart1.length)];
		part2 = hadozeeLastNamePart2[Math.floor(Math.random() * hadozeeLastNamePart2.length)];
	} while (part1 === part2);

	// Generiere eine Zufallszahl zwischen 0 und 1
	const randomNumber = Math.random();

	// 75% der Fälle: part1 + part2
	if (randomNumber < 0.9) {
		lastName = part1 + part2;
	}
	// 25% der Fälle: part1 + offspring
	else {
		lastName = part1 + offspring;
	}

	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
