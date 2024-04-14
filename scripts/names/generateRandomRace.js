function generateRandomRace() {
	race = getRandomElement([
		'Mensch',
		'Zwerg',
		'Elf',
		'Halbling',
		'Gnom',
		'Halbelf',
		'Halbork',
		'Drachenblütiger',
		'Tiefling',
		'Aasimar',
		'Aarakocra',
		'Duergar',
		'Echsenmensch',
		'Firbolg',
		'Githyanki',
		'Githzerai',
		'Goblin',
		'Goliath',
		'Grottenschrat',
		'Hobgoblin',
		'Kenku',
		'Kalashtar',
		'Tabaxi',
		'Triton',
	]);
	// console.log('Zufällig ausgewähltes Volk ist ' + race)
	return race;
}
