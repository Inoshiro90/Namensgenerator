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
		'Grung',
		'Hobgoblin',
		'Kenku',
		'Kalashtar',
		'Kriegsgeschmiedeter',
		'Leonid',
		'Loxodon',
		'Minotaurus',
		'Ork',
		'Tabaxi',
		'Triton',
		'Vedalken'
	]);
	// console.log('Zufällig ausgewähltes Volk ist ' + race)
	return race;
}
