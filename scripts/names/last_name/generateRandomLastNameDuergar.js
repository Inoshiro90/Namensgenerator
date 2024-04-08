function generateRandomLastNameDuergar() {
	let lastName;
	let consecutiveVowels = 0;
	let consecutiveConsonants;
	let consecutiveXZQ;
	let previousVowel = ''; // Definition der Variable hier

	function isDigraph(string) {
		return [
			'ch',
			'chs',
			'ck',
			'dh',
			'dsch',
			'dt',
			'gh',
			'ng',
			'ph',
			'sch',
			'sp',
			'ss',
			'st',
			'sz',
			'th',
			'tz',
			'tzsch',
			'zsch',
		].includes(string);
	}

	do {
		{
			let part1, part2;

			do {
				part1 =
					duergarLastNamePart1[Math.floor(Math.random() * duergarLastNamePart1.length)];
				part2 =
					duergarLastNamePart2[Math.floor(Math.random() * duergarLastNamePart2.length)];
			} while (part1 === part2);

			lastName = part1 + part2;
		}
	} while (
		consecutiveVowels > 1 ||
		lastName.match(/[aeiou]{4,}/gi) ||
		lastName.length < 3 ||
		lastName.length > 15 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
